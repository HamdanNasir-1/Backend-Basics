const express = require("express");
const app = express();

app.get("/",(req,res) =>{
    res.send("hello");
});

app.listen(3000);   

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.listen(3000, () => {
//   console.log("Server running");
// });
