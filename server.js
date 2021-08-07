const express = require('express')
const chartRoute = require('./routes/chartRoute')

// variables
const PORT = 3000

const app = express()

app.get('/chart', (req, res) => {

})

app.listen(PORT, console.log(`Server running on port: http://localhost:${PORT}`))

