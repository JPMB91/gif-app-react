import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow requests from your frontend's domain
//! reemplazar con url del host
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/api/gifs", async (req, res) => {
  const { category } = req.query;
  const API_KEY = import.meta.env.VITE_GIF_KEY_TENOR;
  const CLIENT_KEY = "Gif-app";
  const LIMIT = 10;
  const url = `https://tenor.googleapis.com/v2/search`;
  try {
    const response = await axios.get(url,{
      params:{
        q: category,
        key: API_KEY,
        client_key: CLIENT_KEY,
        limit: LIMIT
      }
    });

    res.json(
      response.data.results.map((img) => ({
        id: img.id,
        title: img.tags[0],
        url: img.media_formats.gif.url,
      }))
    );
  } catch (error) {
    console.log("Error fetching gifs", error);
    res.status(500).json({error: "failed fecthing gifs"})
  }
});

app.listen(PORT, () => {
  console.log("running");
});
