import axios from "axios";
const KEY = "AIzaSyCYo6bBXUDQJGuO55v5ETJLvjTixgZSWfU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});
