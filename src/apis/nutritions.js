import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "https://nutrition-api-json-server.herokuapp.com",
});
