const express = require('express')
const app = express()

const apiVersion = 'v1'
const port = 3001

app.post(`/api/${apiVersion}/image`, (req, res) => {
    console.log(`/api/${apiVersion}/image`, req.body);
    res.json({result: true})
})

app.listen(3001, () => {
    console.log(`Server listening on port ${port}`)
})