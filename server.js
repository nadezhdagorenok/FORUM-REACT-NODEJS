const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


let messages = {'cars' : [{header:'Car', message:'There are lots of cars', code:0},
                          {header:'Subaru', message:'There are lots of cars', code:1}],
                'flowers':[{header:'Flowers', message:'What bike do you prefer?', code:0}],
                'money' : [{header:'Money', message:'All people like money...', code:0}],
                'health': [{header:'Health', message:'You  must check your health...', code:0}],
                'shops' : [{header:'Shops', message:'Do you like shopping?', code:0}]
               };


app.get("/messages", function(req, res){
    let type = req.query.type;
    console.log('Отправка сообщений' + messages[type]);
    console.log(type);
    res.json(messages[type]);
});

app.post('/messages', function (req, res){
    console.log(req.body);
    if(!req.body.header || !req.body.message){
        res.status(400).send('Invalid parameters!');
    } else {
        let key = messages[req.body.type].length;
        console.log(key);
        messages[req.body.type].push({header: req.body.header, message: req.body.message, code: key});
        console.log('messages[req.body.type] in post  ', messages[req.body.type]);
        res.sendStatus(200);
    }
});

app.listen(3000, () => console.log('App listened on port 3000!'));

