import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001",
  //baseURL: "https://tinder-clone-services.herokuapp.com/",
});

export default instance;
