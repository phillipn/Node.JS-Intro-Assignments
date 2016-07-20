var http = require('http'); 
var datum ='';
for(var i = 2; i<5; i++){  
    (function(i){
    http.get(process.argv[i], function (response) {  
        response.setEncoding('utf8');
        response.on('data', function(chunk){
            datum += chunk; 
        }).on('end', function(){
            console.log(datum);
            datum = '';
        });
        response.on('error', console.error);  
    })
    })(i);
}