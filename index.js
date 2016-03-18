var fs = require("fs");

var filename = "./index.html";

function begin(resp) {
    resp.writeHead(200, {
        "Content-Type": "text/html"
    });
    fs.readFile(filename, "utf8", function(err, data) {
        if (err) throw err;
        resp.write(data);
        resp.end();
    });
}

var buf = fs.readFileSync(filename, "utf8");

