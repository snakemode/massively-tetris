import { SomeClass } from "./someClass";


const express = require("express");
const app = express();


const instance = new SomeClass("abc");
instance.print();


app.use(express.static("public"));
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

const listener = await app.listen(process.env.PORT);//, function() {
  console.log("Your app is listening on port " + listener.address().port);
//});
