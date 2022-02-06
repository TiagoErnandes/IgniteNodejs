import * as express from "express";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swaggerDocument.json";

import "./database";

import { router } from "./routes";



const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router)
app.listen(3333, () => console.log("Server is running port 3333!"));