import axios from "axios";

const client = axios.create({
  baseURL: "https://api.chucknorris.io/",
});

export const ChuckService = {
  getRandomJoke: async () => {
    const data = await client.get("jokes/random");
    return data;
  },
};
