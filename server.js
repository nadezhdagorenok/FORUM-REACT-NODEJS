const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let messages=[{header:'Car', message:'There are lots of cars', code:0},
              {header:'Bike', message:'What bike do you prefer?', code:1},
              {header:'Toys', message:'All kids like to play...', code:2}];

app.get("/messages", function(req, res){
    console.log('Отправка сообщений' + messages);
    res.json(messages);
});
app.post('/messages', function (req, res){
console.log(req.body);
if(!req.body.header || !req.body.message){
    res.status(400).send('Invalid parameters!');

} else {
    let key = messages.length;
    console.log(key);

    messages.push({header: req.body.header, message: req.body.message, code: key});
    console.log(messages);
    res.sendStatus(200);
}
});

app.listen(3000, () => console.log('App listening on port 3000!'));

