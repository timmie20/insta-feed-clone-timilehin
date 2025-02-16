import MainLayout from "../../layout/MainLayout";
import StoriesContainer from "../../components/stories/StoriesContainer";
import PostsContainer from "../../components/posts/PostsContainer";

export const Homepage = () => {
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
