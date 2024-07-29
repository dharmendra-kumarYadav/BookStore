import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4001;

//connect to Mongodb
const url = process.env.MONGO_URL;
try {
  mongoose.connect(url, {});
  console.log("connected to mongodb");
} catch (error) {
  console.log("Error", error);
}

//Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(4000, () => {
  console.log(`Server is running at port ${PORT}`);
});
