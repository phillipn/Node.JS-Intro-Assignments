var fs = require('fs');
var path = require('path');
var ext = process.argv[3];
var match = '.' + ext;

fs.readdir(process.argv[2].toString(), function(err, list){
    if(err) return console.log(err);
    var filteredFiles = list.filter(function(file){
        return path.extname(file) === match;
    });
    for(var i=0; i<filteredFiles.length; i++){
        console.log(filteredFiles[i]);
    }
});


