var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var fileLoc = process.argv[3];

var server = http.createServer(function(request, response){
    var readStream = fs.createReadStream(fileLoc);
    readStream.on('open', function () {
        readStream.pipe(response);
    });
});

server.listen(port);