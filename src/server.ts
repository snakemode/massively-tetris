const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/dist"))); // TypeScript output compiled to here.
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (request, response)  => {
  response.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});