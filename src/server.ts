import "reflect-metadata"
import express from "express";
import "./db";
import { router } from "./routes/routes";

const port = 3000;
const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => console.log("Server is run"));