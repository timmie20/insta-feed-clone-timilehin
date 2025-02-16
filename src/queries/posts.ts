import axios from "axios";

const getPosts = () => {
  return axios
    .get(
      "https://dummyjson.com/posts?limit=10&select=title,reactions,body,views,comments",
    )
    .then((response) => response.data);
};

export { getPosts };
