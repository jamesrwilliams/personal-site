---
title: Designing APIs with the OpenAPI spec (v3.0)
date: 2021-09-10
---

We've been talking about revamping our entire testing strategy for a core product of ours for some time. We heavily 
rely on E2E tests in our microservice architecture for verification our systems are still running which makes all of our
pipelines unbelievably slow. With that we're looking to overhaul this by introducing contract tests. This being my first experience with contract tests I was doing some reading and decided to take a look at the OpenAPI
specification to get my head around how we might implement contract tests.

Turns out contract tests are pretty neat, they are the cool cousin to E2E you're not ashamed of. Contract testing is a methodology for ensuring that two separate systems (such microservices) are able to talk with each
other. They use the communication between two systems and creates a contract that can then verify if both sides are
adhering to their standards. There is a little more to them than schema tests as the idea is you're going to work with
the folks behind the other service and allow changes and development to happen while keeping all the pipelines green!



## What is the Open API Spec

Originally known as the "Swagger" spec, named after Swagger the originally creators of the spec. The OpenAPI 
specification or OAS is a:

> The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both 
> humans and computers to discover and understand the capabilities of the service without access to source code, 
> documentation, or through network traffic inspection.

## Basic Structure

In essence a OpenAPI YAML/JSON file that is the textual representation of an API interface, its response scenarios and
format of messages. Like Infrastructure as code but for APIs. 

```yaml
openapi: 3.0.0
info:
  version: 0.0.0
  title: my-api
servers:
  - url: 'https://petstore.swagger.io/v1'
paths:
  /api/resturans/{brand}:
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

## Okay we've got a huge YAML spec file, now what?

Now your API is represented in YAML or JSON, the fun can begin. This file can now be used by a number of tools to spin
up things like mock servers, build API docs, and conduct contract tests!

### Documentation

Need to document your API, of course you do, but now you've got your spec you can feed the file into any number of doc site generators

### Mock Servers

Another cool feature of these files is they can be used to spin up cheap and quick mock servers using the example data 
/ responses included in them. I've had a go with [API Sprout](https://github.com/danielgtaylor/apisprout) and it's as 
easy as providing a CLI tool with the path to your spec file and there you go! 

### Contact tests



You can use something like [portman](https://github.com/apideck-libraries/portman) to pull your OpenAPI spec into 
Postman and then generate contract tests for you!

## But now I need to maintain the spec as well as the source code?

Yes. There are tools to build the spec from your source code but that isn't the point of the spec. The added complexity
is something many will want to consider. These long, unwieldy files 

## See also

- [OpenAPI.Tools](https://openapi.tools/) is a great resource for the multitude of projects that make use of the OAS 
ecosystem.
- [Postman](https://www.postman.com/) - A fantastic (albeit slightly pricey) API platform for building and using APIs.
My go-to tool for testing and mocking APIs on my desktop. Some great paid features too!
- [OpenAPI Specification](https://swagger.io/specification/)
- [Swagger CodeGen](https://github.com/swagger-api/swagger-codegen) - This allows you to generate API client libraries 
(SDK generation), server stubs and documentation automatically given an OpenAPI Spec.
