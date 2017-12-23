# Create-Restfull-API-with-NodeJS-and-Mongo
Easily Create Restfull API with NodeJS and Mongo

#Node.JS Modules

[Mongoose](https://github.com/Automattic/mongoose)

[Body Parser](https://github.com/expressjs/body-parser)

## Contributors

Miftach Hidayatullah  - miftarockavanka@gmail.com

## How to use 

You can read complete install Node js, Express js, and MongoDB on :

[Node Js](https://docs.npmjs.com/getting-started/installing-node)

[Express Js](https://github.com/expressjs/express) 

[MongoDB](https://docs.mongodb.com/manual/installation/) 

The following example plain Node.JS
HTTP server listening on port `8080`.

Starting with **4.16.2**, express applications have become request handler
functions that you pass to `http` or `http` `Server` instances.  

```js 
var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  cors = require('cors'),
  Product = require('./api/models/ProductModel'), //created model loading here
  bodyParser = require('body-parser');
  
app.listen(port);
```
  

