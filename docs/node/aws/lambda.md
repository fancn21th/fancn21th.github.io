# Lambda

I believe in `learn by doing` these days. In order to create a unlikely simple `node.js` application. I decided to go through most key features of node by `creating a bunch of aws nodejs serverless lambda functions` as a warm-up.

Here comes the every steps...

## Serverless.com

Let's start with [serverless](https://www.serverless.com/), a framework that shows up a lot at [egghead](egghead.io).

As to me I think it make sense to maintain the serverless function in `serverless` way. Just in case one day I will move it from `aws` to other cloud provider.

- Template

You can start with a template as start-kit by command line. However I have to begin with [examples](https://github.com/serverless/examples) due to it conflicts with my default local serverless provider issue. :rage:

## JSON as data source

**Step 1:**

- Firstly I want to create a service that I could CRUD a json object. Based on which a `/user` api will be created.

  - a serverless function CRUD a javascript object.
  - a [S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html) buckets hold on the json file.

- Start with [aws-node-fetch-file-and-store-in-s3](https://github.com/serverless/examples/tree/v3/aws-node-fetch-file-and-store-in-s3) example

  - works like a charm

  :::tip
  You have to create a s3 bucket beforehand and update yml file accordingly

  ```yml
  custom:
  bucket: [bucket name]
  ```

  :::

  - refer to [commit](https://github.com/fancn21th/0_218_AWS_LAMBDA_CRUD_JSON/commit/5a2d197b14a6719316765554588274382df6a30e)

- FR
  - a http endpoint support `Post, Put, Delete, Get, Patch`
  - validate with [joi](https://joi.dev/)
  - crud json file in `s3`
