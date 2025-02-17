import React from "react";
import MainLayout from "../../layout/MainLayout";
import StoriesContainer from "../../components/stories/StoriesContainer";
import { getPosts } from "../../queries/posts";
import { useAppContext } from "../../context/AppContext";
import { PostProps } from "../../types";
import Feed from "../../components/posts/Feed";
import { getRandomImage } from "../../lib/getRandomImage";

export const Homepage = () => {
  const { setPosts } = useAppContext();

  const handleGetPosts = async () => {
    try {
      const data = await getPosts(0);

      // Attach a random image to each post
      const updatedPosts = data?.posts.map((post: PostProps) => ({
        ...post,
        imgUrl: getRandomImage(), // Function to get a random image from postImages
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
        <div className="relative mx-auto max-w-2xl space-y-2">
          <div className="sticky top-0 z-10 bg-[whitesmoke] pt-2">
            <StoriesContainer />
          </div>
          <Feed />
        </div>
      </MainLayout>
    </>
  );
};
