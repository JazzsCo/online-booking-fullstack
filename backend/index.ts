import express, { Request, Response } from "express";
import cors from "cors";
import availability from "./Data/data";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send();
});

app.get("/available", (req: Request, res: Response) => {
  const chosenMonth = req.query.month;
  console.log("this", chosenMonth);
  const availabilityChosenMonth = availability.filter((data) => {
    return chosenMonth === data.month;
  });

  return chosenMonth
    ? res.send(availabilityChosenMonth ? availabilityChosenMonth : [])
    : res.status(404).json({ message: "This month is error.." });

  // if (chosenMonth) {
  //   res.send(availabilityChosenMonth ? availabilityChosenMonth : []);
  // } else {
  //   return res.status(404).json({ message: "This month is error.." });
  // }
});

app.post("/register", (req: Request, res: Response) => {
  res.send(req.body);
});

app.listen(5000, () => {
  console.log("Express server is running on port: 5000");
});
