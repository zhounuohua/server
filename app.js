const express = require('express')
const app = express()

app.get('/', (req, res) => res.send(`
    <html>
        <head>
            <title>hello</title>
        </head>
        <body>
            <h3>hello</h3>
            <p>word</p>
        </body>
    </html>
`))

app.listen(3000)