var net = require('net');
var port = process.argv[2];
var date = new Date();
var month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

var server = net.createServer(function(socket) {
    var out = date.getFullYear() + '-' + month + '-' + day + ' ' + date.getHours() + ':' + date.getMinutes() + '\n';
    socket.end(out);
});

server.listen(port);