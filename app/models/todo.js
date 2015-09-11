var mongoose = require('mongoose');

module.exports = mongoose.model('Job', {
	text : {type : String, default: ''}
});