# Lambda

I believe in `learn by doing` these days. In order to create a real world `node.js` application. I decided to go through most key features of node by `creating a bunch of aws nodejs serverless lambda functions` as a warm-up.

`Lambda` and `Node`, one stone two bird.

Here comes the every steps...

## Serverless.com

Let's start with [serverless](https://www.serverless.com/), a framework that shows up a lot at [egghead](egghead.io).

As to me I think it make sense to maintain the serverless function in `serverless` way. Just in case one day I will move it from `aws` to other cloud provider.

- Template

You can start with a template as boilerplate by command line.

```shell
serverless create -t [template name] -p [service name]
```

However I have to begin with [examples](https://github.com/serverless/examples) due to some annoying issue that my default local `serverless` provider issue. :rage:

## Step 1: A json crud service

- Firstly I want to create a service that I could CRUD a json object. Based on which a number of biz api shall be built.

  So we have 2 todos as below.

  - a serverless function CRUD a javascript object.
  - a [S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html) bucket hold on the json file.

- Start with [aws-node-fetch-file-and-store-in-s3](https://github.com/serverless/examples/tree/v3/aws-node-fetch-file-and-store-in-s3) template

  - give it a test and it works like a charm

  :::tip
  You have to create a s3 bucket beforehand and update yml file accordingly

  ```yml
  custom:
    bucket: [bucket name]
  ```

  also [IAM Role Permission]() have to be put in the config file either.

  ```yml
  provider:
    name: aws
    runtime: nodejs14.x
    stage: dev
    iam:
      role:
        statements:
          - Effect: Allow
            Action:
              - s3:GetObject
              - s3:GetObjectAcl
              - s3:PutObject
              - s3:PutObjectAcl
            Resource: "arn:aws:s3:::${self:custom.bucket}/*"
  ```

  :::

  - refer to [commit](https://github.com/fancn21th/0_218_AWS_LAMBDA_CRUD_JSON/commit/5a2d197b14a6719316765554588274382df6a30e)

- The `crud` service

  - [lowdb](https://github.com/typicode/lowdb)

  I don't want to use any database yet since learning Node is why all it happens in the first place. A Json file hold on the entire application data should suffice. I assumed.

  Besides I don't want to reinvent the wheel. After awhile I found this nice JSON database lib.

  `lowdb` only support ESM, so I have to alter the template accordingly. Pls refer to [source code](https://github.com/fancn21th/0_218_AWS_LAMBDA_CRUD_JSON)

  - adaptor

  There is no built-in `s3 adaptor` expect for 3rd party one [lowdb-adapter-aws-s3](https://github.com/nicekiwi/lowdb-adapter-aws-s3).

  I dived into the source code and found out that it may not meed my requirement sooner or later. So I decided to create it on my own.

  see the source code of [s3Adaptor.js ](https://github.com/fancn21th/0_218_AWS_LAMBDA_CRUD_JSON/blob/main/s3Adaptor.js)
