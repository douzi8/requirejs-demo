var express = require('express');
var app = express();
var config = require('./config');

// Support ajax cross domain
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'accept, content-type');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json');
  next();
});

// 请求帖子列表接口
app.get('/topics', function(req, res) {
  // 获取url参数
  var page = parseInt(req.query.page, 10);
  var datas = [];

  console.log(typeof page);

  switch (page) {
    case 1: 
      datas.push({ id: '1', title: '帖子1' });
      break;
    case 2: 
      datas.push({ id: '2', title: '帖子2' });
    case 3: 
      datas.push({ id: '3', title: '帖子3' });
  }

  res.send(datas);
});

var port = process.env.PORT || config.port;
app.listen(port);
console.log('app started on port '+ port);