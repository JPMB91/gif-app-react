import axios from "axios";

export const handler = async(event) =>{
  const { category } = event.queryStringParameters; 
  const API_KEY = import.meta.env.VITE_GIF_KEY_TENOR;
  const CLIENT_KEY = "Gif-app";
  const LIMIT = 10;
  // const url = `https://tenor.googleapis.com/v2/search`;
  const apiUrl = `https://tenor.googleapis.com/v2/search?q=${category}&key=${API_KEY}&client_key=${CLIENT_KEY}&limit=${LIMIT}`;

  try {
    // const response = await axios.get(url,{
    //   params:{
    //     q: category,
    //     key: API_KEY,
    //     client_key: CLIENT_KEY,
    //     limit: LIMIT
    //   }
    // });
    const response = await axios.get(apiUrl)
    const gifs = 
      response.data.results.map((img) => ({
        id: img.id,
        title: img.tags[0],
        url: img.media_formats.gif.url,
      })
    );

    return {
      HttpStatusCode: 200,
      body: JSON.stringify(gifs)
    }
  } catch (error) {
    console.log("Error fetching gifs", error);
    return{
      HttpStatusCode: 500,
      body: JSON.stringify({error: "failed fecthing gifs"})
    }
  }
}