import axios from "axios";

let baseUrl;


baseUrl = "https://api.shope.com.bd/api/v1/public";



export default axios.create({
  baseURL: baseUrl,
});
