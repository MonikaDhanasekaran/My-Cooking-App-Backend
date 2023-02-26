const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db/connect");
db();

//import routes

const authModel = require("./models/authModel");
const registerRoutes = require("./routes/registerRoutes");
const recentRecipes = require("./routes/recentRecipes");
const indianRecipe = require("./routes/indianRecipe");
const chineseRecipe = require("./routes/chineseRecipe");
const asianRecipe = require("./routes/asianRecipe");
const japaneseRecipe = require("./routes/japaneseRecipe");
const italianRecipe = require("./routes/italianRecipe");
const snackRecipe = require("./routes/snackRecipe");
const continentalRecipe = require("./routes/continentalRecipe");
const dessertRecipe = require("./routes/dessertRecipe");
const starterRecipe = require("./routes/starterRecipe");

app.get("/", (req,res) => {
    res.send("Welcome to My App!!!");
});

app.use("/cook",registerRoutes);
app.use("/", authModel.authenticateUser);
app.use("/cook/recentRecipe", recentRecipes);
app.use("/cook/indianRecipe", indianRecipe);
app.use("/cook/chineseRecipe", chineseRecipe);
app.use("/cook/asianRecipe", asianRecipe);
app.use("/cook/japaneseRecipe", japaneseRecipe);
app.use("/cook/italianRecipe", italianRecipe);
app.use("/cook/snackRecipe", snackRecipe);
app.use("/cook/continentalRecipe", continentalRecipe);
app.use("/cook/dessertRecipe", dessertRecipe);
app.use("/cook/starterRecipe", starterRecipe);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`App is running on the PORT ${process.env.PORT}`);
});