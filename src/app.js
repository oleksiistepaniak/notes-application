require("dotenv").config();
const express = require("express");
const database = require('./db/database');
const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}))


require("./routes/task.routes")(app);
require("./routes/auth.routes")(app);

app.listen(process.env.APP_PORT, async () => {
    await database.initializeDatabase();
    console.log(`Server has started its work successfully on port: ${process.env.APP_PORT}`);
});