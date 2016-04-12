var fs = require('fs'),
process = require('process'),
path = require('path')
module.exports=function (req,res,next){
	if(req.url === "/"){
		next()
	}else{
		//req.url.toString().indexOf('stylesheets') !== -1 ||  req.url.toString().indexOf('js') !== -1
		if(req.url.toString().indexOf('public') !== -1 ){
			var Path = process.cwd() + req.url;
			fs.exists(Path,function(exists){
				if(exists === true){
					fs.readFile(Path,'utf8',function(err,data){
						if(err) throw err;
						res.writeHead(200,{
							'Content-Type':types[path.extname(Path)]
						})
						res.end(data)
					})
				}else{
					res.writeHead(404,{'Content-Type':'text/plain'})
					res.end('Not Found')
				}
			})	
		}else{
			next()
		}
	}
}
types = {
    ".css": "text/css",
    ".gif": "image/gif",
    ".html": "text/html",
    ".ico": "image/x-icon",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".js": "text/javascript",
    ".json": "application/json",
    ".pdf": "application/pdf",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".swf": "application/x-shockwave-flash",
    ".tiff": "image/tiff",
    ".txt": "text/plain",
    ".wav": "audio/x-wav",
    ".wma": "audio/x-ms-wma",
    ".wmv": "video/x-ms-wmv",
    ".xml": "text/xml"
};