const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const axios = require("axios");
// parse application/json
app.use(bodyParser.json());

app.use(express.static("./build/"));

app.get("/getAllLedger", (request, response) => {
  axios.get("http://5c9bca575ee0830014b71895.mockapi.io/ledger").then(resp => {
    console.log(resp.data);
    response.json(resp.data);
  });
});
app.get("/getAllLedger/:id", (request, response) => {
  axios.get(`http://5c9bca575ee0830014b71895.mockapi.io/ledger/${request.params.id}`).then(resp => {
    console.log(resp.data);
    response.json(resp.data);
  });
});

app.put("/updateCurrentStatistics", (request, response) => {
  axios.put("http://5c9bca575ee0830014b71895.mockapi.io/statistics/1", request.body).then(resp => {
    console.log(resp.data);
  });
});

app.get("/getCurrentStatistics", (request, response) => {
  axios.get("http://5c9bca575ee0830014b71895.mockapi.io/statistics").then(resp => {
    console.log(resp.data);
    response.json(resp.data[0]);
  });
});

app.post("/postLedger", (request, response) => {
  axios.post("http://5c9bca575ee0830014b71895.mockapi.io/ledger", request.body).then(resp => {
    console.log(resp.data);
  });
});
// SERVER LISTENING
app.listen(1337, () => {
  console.log("Server restarted...");
});
