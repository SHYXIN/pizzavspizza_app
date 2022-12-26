import axios from "axios";

export default axios.create({
    baseURL: "http://127.0.0.1:8000",
    // baseURL: "http://pizzavspizza.com",
    responseType:"json",
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
});