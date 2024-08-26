# app01-nodejs

Primeira aplicação em Node JS, back e front

## HTTP Methods

```TXT
GET  -> list
POST -> create
PUT  -> edit multiple
PATCH -> edit just one
DELETE -> delete
```

## REQUEST

### Query Params (GET)

`server.com/users?name=Mathew&city=Miami`

### Route Params (Get, Put, Delete)

`GET : server.com/users/22`

`PUT : server.com/users/22`

`DELETE : server.com/users/22`

### Body Params (Post and Put)

```JSON
{
    "name":"Maria", "id":22
}
```

## HTTP Status

```TXT
2xx -> success
4xx -> client error (front end)
5xx -> server error (back end)
```

## Commands

`npm init -y`: init your application an create package.json

create file server.js

`npm i express`: install express package

Run server

`node --watch server.js`
