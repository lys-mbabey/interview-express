import express from "express";
const app = express();
const port = 3000;

app.get("/route1", (req, res) => {
  res.send("This is Route 1");
});

app.get("/route2", (req, res) => {
  res.send("This is Route 2");
});

app.listen(port, () => {
  console.log(`Server is running on local port ${port}`);
});
