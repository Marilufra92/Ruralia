const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const poisRoutes = require("./routes/pois");
app.use("/api/pois", poisRoutes);

app.listen(port, () => {
  console.log(`Server attivo su http://localhost:${port}`);
});
