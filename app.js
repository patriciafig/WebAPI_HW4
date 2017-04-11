var express = require('express');
var request = require('request');
var app = express();
var usergrid = require('usergrid');

var client = new usergrid.client({
    orgName: 'figueroap',
	appName: 'sandbox'
});

app.get('/movies', function(req, res) {
    var options = {
        method: 'GET',
        endpoint: 'movies/' + req.params.title
    }
    client.request(options, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })    
});

app.get('/movies/:name', function(req, res) {	

	var rqst = 'https://apibaas-trial.apigee.net/figueroap/sandbox/movies/' + req.params.name;
	
	request({
		url: rqst,
		method: 'GET',
		json: true
		}, function(error, response, body){
					if(error) {
						console.log(error);
					} else {
          if(body.error){
            res.status(400).json({"status" : "400", "description" : "Movie not in inventory "});
          }else{
			var responseBody = {};
			responseBody.status = "200";
			responseBody.description = "GET, retrieved one movie!";
			responseBody.name = body.entities[0].name;
			responseBody.releaseDate = body.entities[0].year;
			responseBody.actors = body.entities[0].Actors;
			res.json(responseBody);
					}
        }
      });
  
});

app.post('/movies', function(req, res) {
    var options = {
        method: 'POST',
        endpoint: 'movies',
        body: {
            name: req.params.title,
            title: req.params.title,
            year: req.params.year,
            "Actors": [
                { name1: req.params.name1 },
                { name2: req.params.name2 },
                { name3: req.params.name3 },
            ]
        }
    };
    
    client.request(options, function(err, data) {
        if(err) {
            res.send(err);
        } else {
            res.send('POST SUCCESSFUL\n');
            res.send(data);
        }
    })
});

app.delete('/movies/:title', function(req, res) {
    var options = {
        method:'DELETE',
        endpoint:'movies/' + req.params.title
    };
    client.request(options, function (err, data) {
        if (err) {
            res.send(err);// Error - DELETE failed
        } else {
            res.send(data);
        }
    });
});

app.listen(3000);
