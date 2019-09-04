const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// app.use(express.static("public"));

app.get("/", (req, res) => {
  let motto = "Imorgon är ingen gång";

  res.render("pages/index", { motto: motto });
});

// app.get("/about", (req, res) => {
//   let skills = [
//     { name: "html", level: "intermediate" },
//     { name: "css", level: "getting by" },
//     { name: "js", level: "passable" }
//   ];
//   res.render("pages/about", { skills: skills });
// });

app.listen(port, () => {
  console.log(`Lyssnar på port: ${port}`);
});
