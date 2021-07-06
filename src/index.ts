import express from "express";

const app = express();
const port = 80;

app.get("/", (_request: unknown, respond: { send: (arg0: string) => unknown }) => {
  respond.send("Hello world!");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
