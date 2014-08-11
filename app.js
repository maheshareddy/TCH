var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');


app.get('/',function(req,res){
	res.render('index');
});

app.get('/products',function(req,res){
	res.render('products');

});

app.get('/payment',function(req,res){
	res.render('payment');
});

app.get('/contact',function(req,res){
	res.render('contact');

});

app.get('/reviews',function(req,res){
	res.render('reviews');

});
app.listen(3000,function(){
	console.log('server started');
});