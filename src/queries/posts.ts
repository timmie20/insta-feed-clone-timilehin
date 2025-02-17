import axios from "axios";

const getPosts = (skip: number) => {
  console.log(skip);

  return axios
    .get(
      `https://dummyjson.com/posts?limit=10&skip=${skip}&select=title,reactions,body,views,comments`,
    )
    .then((response) => response.data);
};

export { getPosts };
