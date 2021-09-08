const winston = require('winston');

module.exports = function() {
    winston.add(new winston.transports.File({
        filename: 'logger.log'}))
      
      winston.add(new winston.transports.File({
        filename: 'Rejections.log',
        handleRejections: true, 
      }))
      winston.exceptions.handle(
        new winston.transports.File({filename: 'Exeptions.log'})
      )
      
      winston.add(new winston.transports.MongoDB({
        db: 'mongodb+srv://Armin:<.Rmin>@cluster0.japtb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        level: 'info',
      }))
      winston.add(new winston.transports.Console({
        handleExceptions: true,
        handleRejections: true}));
}
