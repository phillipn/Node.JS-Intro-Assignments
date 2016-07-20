module.exports = function(dir, ext, cb){
    var fs = require('fs');
    var path = require('path');
    var match = '.' + ext;

    fs.readdir(dir, function(err, list){
        if(err) return cb(err);
        var filteredFiles = list.filter(function(file){
            return path.extname(file) === match;
        });
        return cb(null, filteredFiles);
    });
}