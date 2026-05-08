const express = require("express");
const fetchData = require("./scheduler");

const app = express();

app.get("/", async (req, res) => {
  const data = await fetchData();

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});