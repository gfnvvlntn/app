const express = require('express')

const app = express()

const PORT = 5000

app.get('/', ((req, res) => {
    res.send('first version app')
}))

app.listen(PORT, () => {
    console.log(`server has been started ${PORT}...`)
})

