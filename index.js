var fs = require('fs');
var http = require('http');

fs.exists('index.html', function(exists) {

	if(exists) {

		fs.stat('index.html', function(error, stats) {

			fs.open('index.html', 'r', function(error, fd) {

				var buf = new Buffer(stats.size);

				fs.read(fd, buf, 0, buf.length, null, function(error, bytesRead, buf) {
					var data = buf.toString('utf-8', 0, buf.length);

					http.createServer(function(req, res) {
						res.writeHead(200);
						res.end(data);
					}).listen(process.env.PORT || 5000);
					
					if(typeof process.env.PORT !== 'undefined'){

						console.log("Server started on port" + process.env.PORT);

					} else {

						console.log("Server started on port 5000");
					}
					
					fs.close(fd);
				});
			});
		});
	}
});
