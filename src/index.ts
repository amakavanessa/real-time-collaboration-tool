import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
import env from "./config/env.config";
import db from "./db/models";
import router from "./routes";
import cors from "cors";

dotenv.config();

const app: Express = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(router);
const port = 8080;

db.sequelize.sync();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript server");
});

app.listen(port, () => {
  console.log(`Server is listening on port:${port}`);
});
