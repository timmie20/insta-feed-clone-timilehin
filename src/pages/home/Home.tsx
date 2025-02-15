import MainLayout from "../../layout/MainLayout";
import StoriesContainer from "../../components/others/StoriesContainer";

export const Homepage = () => {
  return (
    <>
      <MainLayout>
        <div className="mx-auto max-w-2xl">
          <StoriesContainer />
        </div>
      </MainLayout>
    </>
  );
};
