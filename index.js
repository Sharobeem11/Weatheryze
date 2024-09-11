import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/weather", async (req, res) => {
    const city = req.body.city;
    const apiKey = process.env.WEATHER_API_KEY;
    try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = result.data;
        res.render("index.ejs", {weather: data});
    } catch(error) {
        res.render("index.ejs", {weather: null, error: "City Not Found"});
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});