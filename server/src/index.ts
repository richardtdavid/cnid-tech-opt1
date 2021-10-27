import express from "express";
import cors from "cors";

import Health from "./routes/health.route";
import Everything from "./routes/articles.route";
import Headlines from "./routes/top-headlines.route";

const app = express();

// enable All CORS Requests
// TODO
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", Health);
app.use("/", Everything);
app.use("/", Headlines);

const port = 6750;
app.listen(port, () => console.log(`Server running on port ${port} ...`));
