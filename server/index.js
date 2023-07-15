const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getMonth, getSongs,updateSong, deleteSong, addSong } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/month",getMonth)
app.get(`/api/songs`, getSongs)
app.delete(`/api/songs/:id`, deleteSong)
app.post(`/api/songs`, addSong)
app.put(`/api/songs/:id`, updateSong)

app.listen(4000, () => {console.log("Server running on 4000")});
