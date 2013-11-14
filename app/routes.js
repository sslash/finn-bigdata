var fs = require('fs');

exports.actions = function(app, options) {

    //var jsFiles = require('./assets/jsFileList').init(options);
    
    app.get('/', function(req, res) {
        res.sendfile('index.html');
    });
};
