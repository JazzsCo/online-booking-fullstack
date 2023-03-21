import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello World..</h1>");
});

app.listen(5000, () => {
  console.log("Express server is running on port: 5000");
});
