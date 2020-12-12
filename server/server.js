const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3500;

app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.json({ message: "Welcome to Help Desk application." });
	// res.send("hello World Express!");
});

app.post("/post", (req, res) => {
	// res.send("you are sending/posting data");
	// res.send(req.body);
	console.log(req.body);
});

app.listen(port, () => {
	console.log(`server is listening on port ${port}`);
	console.log(`http://localhost:${port}`);
});
