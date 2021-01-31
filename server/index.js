/*const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'build')));
app.get('/', function(req,res){
    res.sendFile(path.join,'build','App.js');
});

app.listen('http://localhost:3030/flights?date=2020-08-01');

*/

const request = require('request');

const options = {
    url: 'http://localhost:3030/flights?date=2020-08-01',
    method: 'Get',
};

var origin ='DFW';
var destination = 'JFK';
if (origin == destination) {
    console.log("Origin and desntination are the same")
}
var option2 = {
    url: 'http://localhost:3030/flights?date=2021-01-01&origin='+origin + '&destination=' +destination,
    method: 'Get',
}

request(option2, function(err, res, body) {
   let json = JSON.parse(body);
  // console.log("The length is "+json.length);
  // console.log(json);

   for (var i=0; i <json.length; i++) {
   //console.log(json[i].origin.city);
   }
});


