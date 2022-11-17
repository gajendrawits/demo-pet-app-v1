import axios from "axios";

const instance = axios.create({
  baseURL: "https://petstore.swagger.io/v2/pet",
});

export default instance;
