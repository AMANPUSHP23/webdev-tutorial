import express from "express";
const app = express();
const port =3000;
app.get("/", (req, res) => {
    //console.log(req.rawHeaders);
    res.send("<h1>hello world</h1>");
});


app.get("/about", (req, res) => {
    //console.log(req.rawHeaders);
    res.send("<h1>About me</h1><p>My name is Aman pushp</p>");
});
app.get("/contact", (req, res) => {
    //console.log(req.rawHeaders);
    res.send("<h1>Contact Me </h1><p>phone:4864374734</p>");
});

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
});