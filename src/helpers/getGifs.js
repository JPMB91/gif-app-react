export const getGifs = async (category) => {
  
  const url = `/api/gifs?category=${category}`
  const response = await fetch(url);
  
  const gifs = await response.json()
  return gifs;
 
};

 // const apiKey = import.meta.env.VITE_GIF_KEY_TENOR;
  // const clientkey = "Gif-app";
  // const lmt = 10;
  // const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=${apiKey}&client_key=${clientkey}&limit=${lmt}`;
  // const { results } = await response.json();

  // const gifs = results.map((img) => ({
  //   id: img.id,
  //   title: img.tags[0],
  //   url: img.media_formats.gif.url,
  // }));