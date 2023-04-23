---
title: Runtime configuration for Mock Service Worker (MSW) with localStorage
date: 2023-04-03
---

[Mock Service Worker](https://mswjs.io) (MSW) is a neat mocking library that uses the Service
Worker API to intercept network requests. Its API is really straightforward and flexible which made 
it a perfect fit a tooling project I was working on. We are looking for the ability to easily set up
specific scenarios and share then between non-technical audiences to demonstrate our app's behavior 
under certain conditions.

We have predefined mocked responses for our various endpoints based on our API spec, each of which 
has a unique name or key. So for example the `POST /items` endpoint for creating new items has a 
mocked error response called `USER_LIMIT_REACHED` which occurs when user reaches their item creation
limit. This way I can assign the endpoint a unique key and then share the stub setup as an encoded 
query parameter to allow folks to easily share a scenario.

## Simple Mock Service Worker and React setup

MSW supports both Node and Browser mock implementations, as we're looking to mock in the browser
there are a few additional steps beyond the Node set-up we need to complete, but we can start by 
running: `npm install msw --save-dev` and then move on to defining our mock request handlers 
(the functions that control the mocks).

We're using the REST API mocking feature of MSW for this, if you're looking for the GraphQL API 
check out the [dedicated docs for GraphQL](https://mswjs.io/docs/getting-started/mocks/graphql-api).

The first extra step for browser mocking is the need for a Service Worker file. We can quickly 
generate this by providing our public directory path to the following command:

```sh
npx msw init <PUBLIC_DIR> --save
```

Up next, we need a `browser.ts` file, in which we are going to create a worker instance with our 
request handlers. I import the MSW and pass it my handlers, this is an array of request handlers 
functions which we will look at in a moment:

```typescript
import { setupWorker } from 'msw';
import { handlers } from './handlers';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
```

With those files added we're ready to define some request handlers.

## Defining request handlers

For MSW, we use a `src/mocks/handlers.ts` file that will contain our request handler functions, in 
which we define each API call we want to mock based on the path and method. For example:

```typescript
import { rest } from 'msw';

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),

  // Handles a GET /user request
  rest.get('/user', null),
];
```

Typically, these are staticly defined, however for our case we want a series of response resolvers 
to ensure we can opt in and out of mocks at runtime.

## Runtime handlers

We have a separate app that allows users to configure which mocks they want to use for which 
endpoint, this is all saved into a JSON object stored in localStorage, the JSON output of which 
looks like this:

```json
{
  "endpoints": {
    "fruit": {
      "stub": "stubNameOne",
      "method": "GET",
      "delay": 0
    },
    "fruits": {
      "stub": "stubNameTwo",
      "method": "GET",
      "delay": 0
    }
  }
}
```

## Orchestrator

Now we have our config saved in JSON we can update the handlers code to iterate over the object and
dynamically register handlers for each endpoint in our mock config. 

Note: I cut some corners here as my use-cases only mapping `POST` and `GET` requests, and our JSON
data structure only supports one method per endpoint. In our `./handlers.ts` file we start by 
exporting an array called `handlers` which becomes the argument to `setupWorker`:

```typescript:title=handlers.ts
/**
 * Accept a JSON object of config then regsiter a series of MSW handlers
 * 
 * @param configuration
 */
const generateHandlers = (configuration: StubsConfigurationObject) => {
  const handlers: any = [];

  Object.entries(configuration.endpoints).forEach(([path, endpoint]) => {
    if(endpoint.method === "POST") {
      handlers.push(rest.post(endpoint.matcher, mockOrchestrator))
    } else {
      handlers.push(rest.get(endpoint.matcher, mockOrchestrator));
    }
  });

  return handlers;
}
```

Then importing our array we exported above into `browser.ts` like so:

```typescript:title=browser.ts
import { setupWorker } from 'msw';
import { handlers } from './handlers';

const localStorageConfig = window.localStorage.getItem('CUSTOM_LS_KEY');

export const worker = setupWorker(...generateHandlers(localStorageConfig));
```

But quickly jumping back to our `generateHandlers()` function from above, notice how we're passing
`mockOrchestrator` as the callback for every provider? This syntax is very similar to Express' 
middleware, for example:

```typescript
export const mockOrchestrator = async (req, res, ctx) => {
  return res(
    ctx.status(status),
    ctx.json(payload),
  )
}
````

Here we can augment the `mochOrchestrator` to read from our data store in localStorage and retrieve
the config JSON and to read from our stub mapping and dynamically set up each mock. Here is a full
example: 

```typescript
import { stubs } from './your/custom/stub/exports';

/**
 * Create a MSW reasponse based on a localStorage JSON config
 * 
 * @see https://mswjs.io/docs/api/response
 */
const mockOrchestrator = async (req, res, ctx) => {
  // This should be the endpoint we're attempting to match...
  const matchedEndpoint = req.url.pathname;

  // Check the provided state via LS_CONFIG_KEY for a mock file to use for
  // this endpoint...
  const configuration = window.localStorage.getItem('LS_CONFIG_KEY') ;
  
  // No config found, call the real endpoint.
  if(!configuration) return req.passthrough();

  // Grab config for this matched endpoint
  const mockedEndpointConfig = configuration.endpoints[matchedEndpoint];

  // No config found for this path, call the real endpoint.
  if (!mockedEndpointConfig) return req.passthrough();
  
  // This is where we start to map our requested stub via the config to a JSON stub file.
  const config = stubs.endpoints[mockedEndpointConfig.stub];
  
  // Invalid stub,, pass through again.
  if(!config) return req.passthrough();

  // Encoding Mapping between our config and what MSW needs.
  const encodingMap: { [index: string]: string } = {
    'text/plain': 'text',
    'application/json': 'json',
    'text/xml': 'text/xml'
  }
  
  // Some sensible defaults
  const defaultStubConfig = {
    status: 200,
    encoding: "application/json",
    delay: 0,
    payload: {}
  };
  
  // Merge our config with our defaults above and then destrcutre into the bits we want.
  const { status, payload, delay, encoding } = {...defaultStubConfig, ...config};

  return res(
    ctx.status(status), // Set the status code
    ctx.delay(parseInt(delay,10)), // Add a delay to the response
    ctx[encodingMap[encoding]](payload), // 
  )
  
}
```

We use [`req.passthrough()`](https://mswjs.io/docs/api/request/passthrough) a few times as a way to
opt-out of mocking for particular endpoints or in error scenarios (no config), this ensures MSW 
calls the original endpoint rather than mocking.

Now we have completed the basic set-up for dynamic stubs with Mock Service Worker. We read from our 
localstorage, iterate over the endpoints registering a handler for each path and method. with a 
handler that sets a response based on the information in the localStorage config. 

Happy (dynamic) mocking!
