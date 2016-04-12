var ejs = require('ejs');
var fs = require('fs');
var path = require('path');
var process = require('process')
/*
var obj = {names:['baozi','nana','xiaozi']}
html("index",obj,function(html){
	console.log(html)
})*/
function html(str , obj,callback){
	var dirname= path.join(process.cwd()+'/views/'+str+'.html');
	fs.readFile(dirname, 'utf8', function(err,data){
		if(err) {
			callback(err)		
		}else{
			obj["filename"] = dirname
			var html = ejs.render(data,obj)
			callback(html)
		}
		
	})
}
module.exports = html
