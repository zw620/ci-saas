var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';


function checkToken(){
  var result = false;
  return true;
};


router.use(function(req, res, next){
  console.log("method: " + req.method + ", path: " + req.path);
  next();
});

router.get("/", function(req, res){
  console.log("request /");
  if(checkToken()){
    res.sendFile(path + "index.html");
  }
});

router.get("/jenkins_master_new", function(req, res){
  console.log("request /jenkins_master_new");
  if(checkToken()){
    res.sendFile(path + "jenkins_master_new.html");
  }
});

app.use("/",router);
app.use(express.static('public'));
app.use(express.static('views'));

app.listen(8088,function(){
  console.log("Live at Port 8088");
});
