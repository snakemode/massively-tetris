import { SomeClass } from "./someClass";

const express = require("express");
const path = require("path");
const app = express();

const instance = new SomeClass("abc");
instance.print();

app.use(express.static(path.join(__dirname, "/dist")));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (request, response)  => {
  response.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
