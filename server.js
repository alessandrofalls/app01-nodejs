import express from 'express'

const app = express()

app.use(express.json())

/* Route Requirements
    1. Rote type / HTTP Method
    2. Address
*/

app.get('/users', (req, res) =>  {
    res.send('Ok, deu bom')

})

app.post('/users', (req, res) =>  {
    
    console.log(req.body)
    
    res.send('Ok, deu bom POST')

})

app.listen(3000)

/*
    Create USers API
    - Insert new user
    - List users
    - Edit user
    - Delete user
*/
