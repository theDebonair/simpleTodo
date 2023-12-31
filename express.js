const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    "todos": [
      {
        id: 0,
        title: "eat",
        description: "just eat!"
      },
      {
        id: 1,
        title: "code",
        description: "just code!"
      }
    ]
  });
})

app.listen(3000, () => {
  console.log("Server started listening to port 3000.");
});