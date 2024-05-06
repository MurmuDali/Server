import express from "express";
import mongoose from "mongoose";
import beerRouter from "./Routes/beer.js";

const server = express();
server.use(express.json());
server.use("/drinks/beer", beerRouter);

mongoose
  .connect(
    "mongodb+srv://dalimurmu:dalimurmu@cluster0.aa568rm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

server.listen(2050, () => {
  console.log("Server running");
});
