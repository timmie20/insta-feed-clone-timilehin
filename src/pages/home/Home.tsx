import React from "react";
import MainLayout from "../../layout/MainLayout";
import StoriesContainer from "../../components/stories/StoriesContainer";
import PostsContainer from "../../components/posts/PostsContainer";
import { getPosts } from "../../queries/posts";
import { useAppContext } from "../../context/AppContext";
import { postImages } from "../../data";
import { PostProps } from "../../types";

export const Homepage = () => {
  const { setPosts } = useAppContext();

  const handleGetPosts = async () => {
    try {
      const data = await getPosts();

      // Function to get a random image from postImages
      const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * postImages.length);
        return postImages[randomIndex]?.url;
      };

      // Attach a random image to each post
      const updatedPosts = data?.posts.map((post: PostProps) => ({
        ...post,
        imgUrl: getRandomImage(),
      }));

      setPosts({ posts: updatedPosts });
      console.log(updatedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    handleGetPosts();
  }, []);
  return (
    <>
      <MainLayout>
        <div className="mx-auto max-w-2xl space-y-2">
          <StoriesContainer />
          <PostsContainer />
        </div>
      </MainLayout>
    </>
  );
};
