const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
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
