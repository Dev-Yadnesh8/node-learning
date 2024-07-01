const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { log } = require('console');

const mPath = path.join(__dirname, 'test/');
console.log(mPath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    fs.readdir(mPath, function (err, files) {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(files);
        console.log('files: ' + files);
    });
});

app.get('/showDetails/:fileName', function (req, res) {
    fs.readFile(mPath+req.params.fileName,"utf-8", function (err, fileData) {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(fileData);
        console.log('fileData: ' + fileData);
    });
});

app.post('/edit', function (req, res) {
    const { path1, path2 } = req.body;
    const oldPath = path1.split(' ').join('') ;
    const newPath = path2.split(' ').join('') ;
    fs.rename(path.join(mPath,oldPath),path.join(mPath,newPath),function(err){
        if (err) {
            console.log('error updating file name: ' + err);
            return res.status(500).json({ error: err });
        }
        res.status(200).json({ message: 'File name updated successfully' });
        
    })
});


app.post('/create', function (req, res) {
    const { title, details } = req.body;
    const fileName = title.split(' ').join('') + '.txt';
    fs.writeFile(path.join(mPath, fileName), details, function (err) {
        if (err) {
            console.log('error creating file: ' + err);
            return res.status(500).json({ error: err });
        }
        res.status(200).json({ message: 'File created successfully' });
    });
});

app.listen(3000, function () {
    console.log("Server is running");
});
