
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Our app listening on port 3000!');
})

app.get('/', function (req, res) {
  execute(req, res);
})

app.post('/', function (req, res) {
  execute(req, res);
})

var execute = function (req, res) {

	var video = req.query.video;
	var image = req.query.image;
	var sub = req.query.sub;
	var description = req.query.desc;
	var site = req.query.site;
	var type = req.query.t;
	var ct = req.query.ct;

	var html = '<html>' +
				'	<head>' +
				'		<meta property="og:title" content="' + sub + '"/>' +
				'		<meta property="og:video" content="' + video + '"/>' +
				'		<meta property="og:image" content="' + image + '"/>' +
				'		<meta property="og:description" content="' + description + '"/>' +
				'		<meta property="og:site" content="' + site + '"/>' +
				'		<meta property="og:type" content="' + type + '" />' +
				'	</head>' +
				'	<body>' +
				'		<video autoplay>' +
				'	  		<source src="' + video + '" type="' + ct + '">' +					
				'		</video>' +
				'	</body>' +
				'</html>';

	res.set('Content-Type', 'text/html');
	res.send(new Buffer(html));
}