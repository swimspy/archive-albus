var express=require("express"),router=express.Router();router.get("/",function(e,r){r.render("index",{message:"We Love Swimspy",version:"Albus",author:"Mr.Benson"})}),router.get("/landing",function(e,r){r.render("landing",{title:"Swimspy Landing Page",version:"Albus Version",author:"Mr. Benson"})}),router.get("/about",function(e,r){r.render("about",{title:"About"}),console.log("about page is loaded")}),router.get("/create-name-tag",function(e,r){r.render("create-name-tag",{title:"Create Your Name Tag"})}),router.get("/user",function(e,r){r.render("user",{title:"User"})}),router.get("/help",function(e,r){r.render("help",{title:"Help File"})}),router.get("/send-invitations",function(e,r){r.render("send-invitations",{title:"Send Invitations To Your Friends"})}),router.get("/welcome-explore",function(e,r){r.render("welcome-explore",{title:"Welcome and Explore Swimspy"})}),module.exports=router;