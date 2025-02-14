import React from "react";
import Sidebar from "../components/shared/Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div>
        <Sidebar />
        {children}
      </div>
    </>
  );
}
