const winston = require('winston'),
      mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost:27017/vidly', {useNewUrlParser: true, useUnifiedTopology: true/*, useFindAndModify: false */})
    .then( () => { winston.info('Connected to MongoDB...') });
}