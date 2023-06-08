import axios from "axios";

export const authFetch = axios.create({
  baseURL: "https://api.aanmelder.nl/v1/",
  headers: {
    Authorization: import.meta.env.VITE_AUTH_TOKEN,
  },
});
