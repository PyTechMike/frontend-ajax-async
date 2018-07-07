var http = require('http');
var static = require('node-static');
var file = new static.Server('.');
var axios = require('axios');

function startServer(port) {
    http.createServer(function(req, res) {
        file.serve(req, res);
      }).listen(port);
      
      console.log('Server running on port ' + port);
      
}

function getDataAsync() {
    var promise1 = axios.get('http://www.mocky.io/v2/55f7485935681951044b3dc6')
    .then(function (response) {
      console.log(response);
    }).catch(function (error) {
        console.log(error);
      });
      var promise2 = axios.get('http://www.mocky.io/v2/55f748ca3568195f044b3dc9')
    .then(function (response) {
      console.log(response);
    }).catch(function (error) {
        console.log(error);
      });
    var promise3 = axios.get('http://www.mocky.io/v2/55f748b33568195d044b3dc8')
    .then(function (response) {
      console.log(response);
    }).catch(function (error) {
        console.log(error);
      });
    
    Promise.all([promise1, promise2, promise3]).then(values => { 
        responseHandler();
    });
}

function getDataConsist() {
    axios.get('http://www.mocky.io/v2/55f7485935681951044b3dc6')
    .then(function (response) {
      console.log(response);
      axios.get('http://www.mocky.io/v2/55f748ca3568195f044b3dc9')
      .then(function (response) {
        console.log(response);
        axios.get('http://www.mocky.io/v2/55f748b33568195d044b3dc8')
        .then(function (response) {
          console.log(response);
          responseHandler();
        })
      })
    })   
}

function responseHandler() {
    console.log('All pespomises are successfully!');
}

startServer(3000);
getDataAsync()
getDataConsist()
