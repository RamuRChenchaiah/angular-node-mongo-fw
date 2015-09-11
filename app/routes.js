var Job = require('./models/todo');

function getTodos(res){
	Job.find(function(err, todos) {
			if (err)
				res.send(err)

			res.json(todos); 
		});
};

module.exports = function(app) {

	app.get('/api/jobs', function(req, res) {
		getTodos(res);
	});

	app.post('/api/jobs', function(req, res) {
		Job.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos(res);
		});

	});

	// delete a job
	app.delete('/api/jobs/:id', function(req, res) {
		Job.remove({
			_id : req.params.id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos(res);
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};