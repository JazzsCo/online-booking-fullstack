import express, { Request, Response } from "express";
import { availability } from "./Data/passPortData";
import { getAllStations, getBuses } from "./Data/testData";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send();
});

/* Passport Booking Server Side */
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
  res.end();
});

/* Bus App Server Side */
app.get("/getAllStations", (req: Request, res: Response) => {
  const data = getAllStations();
  res.send(data);
  res.end();
});

app.post("/getBusses", (req: Request, res: Response) => {
  const { fromStationName, toStationName } = req.body;
  // console.log(getBuses(fromStationName, toStationName));

  res.send(getBuses(fromStationName, toStationName));
  // res.send(req.body);
  res.end();
});

/* Server running on port 5000 */
app.listen(5000, () => {
  console.log("Express server is running on port: 5000");
});
