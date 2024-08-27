import express from 'express'
import { PrismaClient } from '@prisma/client'
import { PrismaClientValidationError } from '@prisma/client/runtime/library'

const prisma = new PrismaClient()

const app = express()

app.use(express.json())

/* Route Requirements
    1. Rote type / HTTP Method
    2. Address

    alessandrofalls
    1OQYnpq8bUppEsdl

    mongodb+srv://alessandrofalls:1OQYnpq8bUppEsdl@clusteraws-sp.okevs.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAWS-SP
*/

app.get('/users', async (req, res) =>  {
    
  const users = await prisma.user.findMany();
  
  res.status(200).json(users)

})

app.post('/users', async (req, res) =>  {
    
   /* console.log(req.body)
    users.push(req.body)
   */
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }

  }) 
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
