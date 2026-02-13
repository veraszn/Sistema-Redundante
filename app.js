import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("API rodando");
});

app.get("/info", (req, res) => {
  res.json({
    status: "ok",
    host: process.env.HOSTNAME,
    timeStamp: new Date().toISOString(),
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Rodando na porta 3000");
});
