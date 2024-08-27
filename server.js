import express from 'express'

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://alessandrofalls:1OQYnpq8bUppEsdl@clusteraws-sp.okevs.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAWS-SP";

const app = express()

const users = []

app.use(express.json())

/* Route Requirements
    1. Rote type / HTTP Method
    2. Address

    alessandrofalls
    1OQYnpq8bUppEsdl

    mongodb+srv://alessandrofalls:1OQYnpq8bUppEsdl@clusteraws-sp.okevs.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAWS-SP
*/

app.get('/users', (req, res) =>  {
    res.status(200).json(users)

})

app.post('/users', (req, res) =>  {
    
    console.log(req.body)

    users.push(req.body)
    
    res.status(201).json(req.body)

})

app.listen(3000)

/*
    Create USers API
    - Insert new user
    - List users
    - Edit user
    - Delete user
*/




// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

