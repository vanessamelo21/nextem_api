var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
require('./app/router/router.js')(app);

const db = require('./app/config/db.config.js');

const Role = db.role;

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});
  
 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log(host, port)
})

//to create role user
function initial(){
	Role.create({
		id: 1,
		name: "USER"
	});
}

//funcao sendrequest verificar timeout
sendRequestToApi = () => new Promise((resolve) => {
  const time =  parseInt(1000 * Math.random());
  setTimeout(() => resolve({ time, fromApi: true }), time);
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})

sendRequestToApi();
