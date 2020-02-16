const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const jsonParser = bodyParser.json()
const urlencodeParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'))
// app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req, res) => res.send('This is the about content for get'))
app.post('/about', (req, res) => res.send('This is the about content for post'))
app.get('/user', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        name: 'John Doe',
        email: 'jon.doe@andromeda.com'
    }));
})
app.post('/user', urlencodeParser, (req, res) => {
    var data = req.body;
    var output = {
        result: true,
        params: {
            name: data.name,
            email: data.email
        }
    };
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(output));
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))