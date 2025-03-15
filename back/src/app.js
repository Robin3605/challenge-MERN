import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import { connectDB } from "./config/db.js";



const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));


app.use("/api", routes);


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
    connectDB();
});
