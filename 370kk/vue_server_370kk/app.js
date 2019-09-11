//app.js 服务器端项目
//1:下载第三方模块 
//express/express-session/cors/mysql
//2:将第三方模块引入到当前程序中
const express= require("express");
const session = require("express-session");
const index=require("./routes/index");
const cors = require("cors");
const mysql = require("mysql");
//3:创建数据库连接池
var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   connectionLimit:20,
   database:"370kk"
})

//4:创建web服务器监听 8080 端口
var server = express();
server.listen(5050);
//5:处理跨域 cors 
//5.1：配置允许访问程序地址(脚手架)
//     http://127.0.0.1:8080  (ok)
//     http://localhost:8080
//5.2:每请求是否验证true
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}))
// 6.配置session,配置需要在请求之前
server.use(session({
    secret:"128位字符串字符串",   //安全字符串
    resave:true,                //每次请求保存数据
    saveUninitialized:true      //保存初始化数据
}))
// 7.配置静态目录
server.use(express.static("public"))
server.use("/index",index);

//功能一:完成用户登录
//启动服务器app.js/启动数据库
//打开浏览器
//http://127.0.0.1:5050/login?uname=laoxie&upwd=123
//http://127.0.0.1:5050/login?uname=tom&upwd=122

server.get("/login",(req,res)=>{
  //6.1:接收网页传递数据 用户名和密码
  var u = req.query.uname;
  var p = req.query.upwd;
  //6.2:创建sql
  var sql = "SELECT id FROM kk_login";
  sql+=" WHERE uname = ? AND upwd = md5(?)";
  //6.3:执行sql语句并且获取返回结果
  pool.query(sql,[u,p],(err,result)=>{
   //6.4:判断登录是否成功
   if(err)throw err;
   //6.5:将结果返回网页
   if(result.length==0){
     res.send({code:-1,msg:"用户名或密码有误"})
   }else{
     //获取当前登录用户id
     var id=result[0].id;
     //将用户id保存在session对象中
     req.session.uid=id;
     console.log(req.session)
     res.send({code:1,msg:"登录成功"});
   }
  });
})








