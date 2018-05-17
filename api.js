var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function (req, res) {
    var filename = process.argv[3]
    fs.readFile(filename, 'utf-8', function (err, content) {
        if (err) {
            return res.sendStatus(500);
        } 
        try {
            let object = JSON.parse(content);
            res.json(object);
        } catch (err) {
            res.sendStatus(500)
        }
    })
})

app.listen(process.argv[2])


