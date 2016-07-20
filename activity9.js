var http = require('http'); 
var result = [];
var count =0;

for(var i=2; i<5; i++){
    (function(i){
        http.get(process.argv[i], function(response) { 
            var datum ='';
            response.setEncoding('utf8');
            response.on('data', function(chunk){
                datum += chunk; 
            });
            response.on('end', function(){
                result[i] = datum;
                count++;
                if(count == 3){
                    result.forEach(function(item){
                        console.log(item);
                    });
                }
            });
        });
    })(i);
}





