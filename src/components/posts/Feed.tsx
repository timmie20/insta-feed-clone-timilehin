import { useState, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import Post from "./Post";
import { getPosts } from "../../queries/posts";
import { getRandomImage } from "../../lib/getRandomImage";
import { PostProps } from "../../types";

export default function Feed() {
  const { posts, setPosts } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Keeps track of how many posts fetched
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Function to load more posts
  const fetchMorePosts = async () => {
    console.log("im here");

    setLoading(true);
    try {
      const data = await getPosts(page * 10);
      const updatedPosts = data?.posts.map((post: PostProps) => ({
        ...post,
        imgUrl: getRandomImage(), // Function to get a random image from postImages
      }));

      setPosts((prev) => ({
        ...prev, // Keep existing posts
        posts: [...(prev?.posts || []), ...updatedPosts], // Ensure posts is always an array
      }));
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Intersection Observer

  const lastPostRef = (node: HTMLDivElement | null) => {
    if (loading) return;

    // Disconnect previous observer
    if (observerRef.current) observerRef.current.disconnect();

    // Create new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Fetching more posts...");
          fetchMorePosts();
        }
      },
      { threshold: 1.0 },
    );

    if (node) observerRef.current.observe(node); // Observe the last post
  };

  return (
    <div className="w-full space-y-3 overflow-scroll">
      {posts?.posts.map((post, index) => (
        <div
          key={post.id}
          ref={index === posts.posts.length - 2 ? lastPostRef : null}
        >
          <Post post={post} />
        </div>
      ))}
      {loading && <div>Loading...</div>}
      {!loading && posts?.posts.length === 0 && <div>No posts available</div>}
    </div>
  );
}
