import express from "express";
const app = express();
const port = 3000;

/*
Modify the code to do the following:
- /route1 should check the request for the presence of an Authorization header
  with the value “Bearer 1234” and should return an appropriate error code if
  it does not exist.
- /route1 and /route2 should attach a response header "Date" that is the time
  UTC time the request was received.
*/

app.get("/route1", (req, res) => {
  res.send("This is Route 1");
});

app.get("/route2", (req, res) => {
  res.send("This is Route 2");
});

app.listen(port, () => {
  console.log(`Server is running on local port ${port}`);
});
