import { categoriesRoutes } from "./routes/categories.routes";
import * as express from "express";


const app = express();

app.use(express.json());

app.use("/categories",categoriesRoutes);

app.listen(3333, () => console.log("Server is running port 3333!"));