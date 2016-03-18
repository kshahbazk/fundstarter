var fs require('fs');
var http = require('http');

fs.exists(fileName, function(makeSureItExists) {
	
	if(makeSureItExists) {
		fs.stat('index.html', function(error, stats) {

			fs.open('index.html', 'r', function(error, file) {

				var buffer = new Buffer(stats.size);

				fs.read(file, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {

					var data = buffer.toString('utf-8', 0, buffer.length);

					http.createServer(function(req, res) {

						res.writeHead(200);

						res.end(data);
						/* This is where you listen to the port*/
					}).listen(process.env.PORT || 5000);
					
					if(typeof process.env.PORT !== 'undefined'){

						console.log("The Server has started" + process.env.PORT);

					} else {

						console.log("The Server has started on port 5000");
					}
					fs.close(fd);
				});
			});
		});
	}
});
