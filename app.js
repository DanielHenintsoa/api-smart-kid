const express = require("express");
const cors = require('cors');
const app = express();
const db = require("./db/connection");
const indexRoutes = require("./application/routes/indexRoutes");
const path = require('path');

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors({origin : "*"}));

app.use("/api", cors(), indexRoutes);

app.get('/', cors(), async(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3001, ()=>{
    console.log("Listenning on port 3001...");
});