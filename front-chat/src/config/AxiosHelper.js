import axios from "axios";
export const baseURL = "https://real-time-chat-application-4e84.onrender.com";
export const httpClient = axios.create({
  baseURL: baseURL,
});
