const express = require("express");

const { PORT } = require("./utils/config");  

const bodyParser = require("body-parser");

const routes = require("./routes/index.route");
const connectDB = require("./database/config");

const app = express();

app.use(bodyParser.json());

app.use("/api",routes);

connectDB();
app.listen(PORT, () => {
  console.log("Server is running on port "+PORT);
});
