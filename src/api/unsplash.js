import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID stK-AZALFRJbCEcXHtiK0bMybkRlRi9C4Ys5DbN-h_E",
  },
});
