// export const getGifs = async (category) => {
//   const apiKey = import.meta.env.VITE_GIF_KEY_TENOR;
//   const clientkey = "Gif-app";
//   const lmt = 10;
//   const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=${apiKey}&client_key=${clientkey}&limit=${lmt}`;

//   const response = await fetch(url);

//   const { results } = await response.json();

//   const gifs = results.map((img) => ({
//     id: img.id,
//     title: img.tags[0],
//     url: img.media_formats.gif.url,
//   }));
//   return gifs;
// };

export const getGifs = async (category) => {
  try {
    const url = `/api/gifs?category=${category}`;  // This calls the serverless function
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const gifs = data.results.map((img) => ({
      id: img.id,
      title: img.tags[0],
      url: img.media_formats.gif.url,
    }));
    return gifs;
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    return [];  // Return an empty array or handle error appropriately
  }
};

