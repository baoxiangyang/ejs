var html = require('./common/newEjs'),
publics = require('./common/publics')
app = require('connect')();
app.use(publics)
app.use(function(req,res,next){
	html('index',{names:['baozi','nana','xiaozi'],title:"首页",user:""},function(html){
		res.writeHead(200,{'Cotent-Type':'text/html'})
		res.end(html)
	})

})
app.listen(3000)
