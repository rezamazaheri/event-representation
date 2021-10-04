/* eslint-disable prettier/prettier */
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/rezamazaheri/event-representation",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  }
}
