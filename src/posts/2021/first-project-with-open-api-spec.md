---
title: Designing APIs with the OpenAPI spec (v3.0)
date: 2021-09-10
draft: true
---

Our team has been talking about revamping our testing strategy for a core service of ours for some time. We heavily 
rely on E2E tests against our microservice architecture which makes all of our pipelines unbelievably slow. 
We're looking to implement contract tests to help elevate our dependency on our E2E test suite. 

I don't have any previous experience with this testing strategy so, I decided take a look at the OpenAPI
specification to get my head around how we might implement contract tests using it to help us on our
way.

Contract tests are pretty neat, they are the cool cousin to E2E you're not ashamed of. 
They represent a methodology for ensuring that two separate systems (such microservices) are able to talk with each
other. They use the communication between two systems and creates a "contract" that can then verify if both sides are
adhering to their agreed upon standards. There is a little more to them than schema tests as the idea is you're going to work with
the folks behind the other service and allow changes and development to happen while keeping all the pipelines green!

How does the OpenAPI spec relate to contract tests? One challenge with contract tests is having your
API documented in such a way that allows you to create and maintain these contracts with ease. 
Luckily this is one of the problems that the OpenAPI specification aims to address.

## The Open API Spec (v3.0)

Originally known as the "Swagger" spec, named after Swagger the originally creators of the spec. The OpenAPI 
specification or OAS is a:

> The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both 
> humans and computers to discover and understand the capabilities of the service without access to source code, 
> documentation, or through network traffic inspection.

In essence a OpenAPI YAML/JSON file that is the textual representation of an API interface, its response scenarios and
format of messages. Like Infrastructure as code but for APIs. 

## Example structure

Here is a very simple YAML sample file for `my-resturants` API:

```yaml{numberLines: true}
openapi: 3.0.0
info:
  version: 0.0.0
  title: my-resturants
servers:
  - url: 'https://petstore.swagger.io/v1'
paths:
  /api/resturants/{brand}:
    summary: Get a list of services
      parameters:
          - $ref: "#/components/parameters/brand"
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/BrandSchema"
```

There is quite a lot going on here, but you can see on Line 11, we're referencing and a separate
specification for the `brand` URL parameter. Same kind of thing on line 18 too, we're referencing a 
response schema which is defined in a single place then reused, like a variable but for specification
information. The rough idea is you specify the possible responses, parameters and all sorts of other
things like examples, headers, auth and alike so the specification is a self-contained, single
source of truth.
 
## Okay we've got a huge YAML spec file, now what?

Now your API is represented in YAML or JSON, the fun can begin. This file can now be used by a number of tools to spin
up things like mock servers, build API docs, and conduct contract tests!

### Documentation

Need to document your API, of course you do, but now you've got your spec you can feed the file into
any number of doc site generators or even more generic static site generators like Gatsby! I've had 
a quick go with [RapiDoc](https://mrin9.github.io/RapiDoc/quickstart.html) and it is awesome.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <script type="module" src="https://unpkg.com/rapidoc/dist/rapidoc-min.js"></script>
  </head>
  <body>
    <rapi-doc spec-url="path/to/api/spec.json"></rapi-doc>
  </body>
</html>
```

And just like that you have a full API docs site, how cool is that! You can get more bespoke designs
working with something like [gatsby-source-openapi-aggregate](https://www.gatsbyjs.com/plugins/gatsby-source-openapi-aggregate/)
that adds the OpenAPI spec to the sites GraphQL instance.

### Mock Servers

Another cool feature of these files is they can be used to spin up cheap and quick mock servers using the example data 
/ responses included in them. [Prism](https://github.com/stoplightio/prism) is a nifty little tool from the folks at [Stoplight](https://stoplight.io/) that does some cool things like mock servers.

You can install the script on your machine via the global installation command:

```bash
yarn global add @stoplight/prism-cli
```

Once that has downloaded you simply pass the API spec path as a parameter:

```shell{outputLines: 2-10,12}
prism mock specs/example-one.json
```

![](../images/openapi/open-api-prism-output-screenshot.png)

You can see the server being hit here and the validators running against the provided spec

## Contact tests

Now we have our API documented and have found some additional uses for the spec. It's time to get down
to the main goal, contract tests. As this is more of a methodology than a tool or solution, we need
a specific form our contract tests are going to take.

You can use something like [portman](https://github.com/apideck-libraries/portman) to pull your OpenAPI spec into 
Postman and then generate contract tests for you!

### But now I need to maintain the spec as well as the source code?

Yes. There are tools to build the spec from your source code but that isn't the point of the spec. The added complexity
is something many will want to consider. You can author these specification files from your source code with tools like
[foo]() for Python, but the idea here is you design your API specification then make changes to code and infrastructure
to reflect that not the other way around. 

- <mark>Example of Contract test approach</mark>
- <mark>How an OpenAPI spec fits into that</mark>
- <mark>Monitoring setup thoughts</mark>
- <mark>Next steps</mark>

Writing your API spec smells a bit like pure TDD but for APIs and that is not exactly a bad thing.

## See also

Here is some helpful further reading or resources you may be interested in around the OpenAPI v3 spec and contract tests.

- [OpenAPI.Tools](https://openapi.tools/) is a great resource for the multitude of projects that make use of the OAS 
ecosystem.
- [Postman](https://www.postman.com/) - A fantastic (albeit slightly pricey) API platform for building and using APIs.
My go-to tool for testing and mocking APIs on my desktop. Some great paid features too!
- [OpenAPI Specification](https://swagger.io/specification/) - The specification for the specification, how meta.
- [Swagger CodeGen](https://github.com/swagger-api/swagger-codegen) - This allows you to generate API client libraries 
(SDK generation), server stubs and documentation automatically given an OpenAPI Spec.