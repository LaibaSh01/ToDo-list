// const express= require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use('view engine', 'ejs');

// app.get("/",function(req,res){

//     // var a = 3+5;
//     // // res.send(a);
//     // res.send("Hello");

//     var today = new Date();
//     var currentDay = today.getDay();
//     if (currentDay=== 6 || currentDay === 0){
//         res.write("<h1>Yay it's the weekend!</h1>");
//         res.send();
//     } else {
//         // res.write("<p>It is not the weekend.</p>");
//         // res.write("<h1>Boo! I have to work!</h1>");
//         // res.send();
//         res.sendFile(__dirname + "/index.html");
//     }
// });



// app.listen(3000,function(){
//     console.log("Server started on port 3000");
// });


const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date); //it will print hello world jokay mene module.exports likh ke sirf yehi paas kara tou sirf yehi available hoga .
// console.log(date); //ab getdate function export karwaya hai tou function chalna chahiye lekin abhi bhi nahi chal raha kyun ke iskeliye parenthesis laganay parengy.
// console.log(date()); //now its running 

const app = express(); 


const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems=[];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){

    let day = date.getDate();


    // let today = new Date();

    // let options = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"

    // };

    // let day = today.toLocaleDateString("en-US", options);



    // var currentDay = today.getDay();
    // var day = "" ;

    // if (currentDay === 6 || currentDay === 0){
    //     day = "weekend";
    //     }else{
    //         day = "Weekday"; 
    // }

//if you have more than five conditions then you should use switch case statement

    // switch (currentDay){
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error: current day is equal to: "+ currentDay);
    // }
    res.render("list",{listTitle: day, newListItems: items});

});

app.post("/",function(req,res){

    let item = req.body.newItem;
    // let list = req.body.list;
    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    // let item = req.body.newItem;
    // console.log(item);
    // items.push(item);
    // res.redirect("/");
});


app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List", newListItems:workItems});
});

app.get("/about", function(req,res){
    res.render("about");
})

app.post("/work",function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});
app.listen(4000,function(){
    console.log("Server started on port 4000");
})