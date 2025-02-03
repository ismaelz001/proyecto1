import express from 'express';

const app = express();

const PORT = 3000; // cuidao con numero de puerto
//por si otro compañero tiene pillado este mismo numero 
//al trabajar en github, 


// login
app.get("/", function(req, res) {
    res.send("Hello Login");
});




// algo 
app.get("/", function(req, res) {
    res.send("Hello World");
});

app.listen(PORT, function() {
    console.log(`Server is running on PORT ${PORT}`);
});