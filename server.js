var express = require("express");

var app = express();

app.get("/", function(req, res){
    console.log("Recieved a request for /");
    res.write("This is the root");
    res.end();
});

app.get("/home", function(req, res){
    console.log("Received a request for the home page");

    res.write("This is the home page.");
    res.end();
});

app.use(express.static(path.join(__dirname, 'public')));

​

app.use(

    bodyParser.urlencoded({

      extended: true

    })

  )

  

app.use(bodyParser.json())

​

app.post('/login', function(req, res){

​

    console.log(req.body);

    var username = req.body.username;

    var password = req.body.password;

​

    console.log("username", username);

    console.log("password", password);

​

    if (username == "admin" && password == "password") {

        res.json({success: true});

        console.log("success");

        if (req.session.username == undefined) {

            req.session.username = username;

            req.session.save();

          }

          console.log("Session username: " + req.session.username);

    }

    else {

        res.json({success: false});

        console.log("failure");

    }

})

app.post('/logout', function(req, res){

    console.log(req.session.username);

    if (req.session.username) {

​

        req.session.destroy();

        res.json({success: true});

        console.log("the logout worked");

    }

    else {

        res.json({success: false});

        console.log("the logout didn't work");

    }

})

app.listen(5000, function(req, res){
   console.log("The server is up and listening on port 5000"); 
});
