import fetch from 'node-fetch';

export async function handler(event) {
  const { category } = event.queryStringParameters;  // Extract category from query params
  const apiKey = import.meta.env.TENOR_API_KEY;  // Fetch API key from environment variables
  const clientKey = "Gif-app";  // Set your client key
  const limit = 10;  // Limit for GIFs

  const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=${apiKey}&client_key=${clientKey}&limit=${limit}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),  // Return the data back to the frontend
    };
  } catch (error) {
    console.error("Error fetching data from Tenor API:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),  // Return error if any
    };
  }
}
