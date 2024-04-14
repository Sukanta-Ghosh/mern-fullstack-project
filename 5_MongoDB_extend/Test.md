### Endpoints:

#### GET req:

url -> localhost:3000/api/v1/user

#### POST req:

##### ProductModel

url -> localhost:3000/api/v1/product
body -> raw:
{
"name": "Product 2",
"description": "Electronic gadget",
"price": 200,
"discount": 25,
"category": "Electric"
}

##### UserModel

url -> localhost:3000/api/v1/user

body -> raw:
{
"name": "Suku",
"email": "something@gmail.com",
"password": "12345678",
"confirmPassword": "12345678"
}

#### Query req

url -> localhost:3000/api/v1/product?sort=price_asc&page=1

Param:

#### Files to run:

nodemon ./mvc/api.js
nodemon ./pocs/dbDemo.js

#### Resources:

- https://www.npmjs.com/package/mongoose-validator
