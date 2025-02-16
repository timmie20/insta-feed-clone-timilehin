import React, { createContext, useContext, useState } from "react";
import { PostProps } from "../types";

export type PostDataProps = {
  posts: PostProps[];
};

interface AppContextProps {
  posts: PostDataProps | null;
  setPosts: React.Dispatch<React.SetStateAction<PostDataProps | null>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [posts, setPosts] = useState<PostDataProps | null>(null);

  return (
    <AppContext.Provider value={{ posts, setPosts }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return ctx;
};
