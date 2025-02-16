import React from "react";
import Leftbar from "../components/shared/Leftbar";
import Rightbar from "../components/shared/Rightbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-screen w-screen bg-neutral-100">
      <div className="mx-auto flex max-w-screen-xl overflow-hidden">
        {/* Left Sidebar */}
        <div className="max-h-[850px] w-full max-w-[250px] py-1">
          <Leftbar />
        </div>

        {/* Main Content */}
        <main className="flex-1 py-2">{children}</main>

        {/* Right Sidebar */}
        <div className="h-screen w-full max-w-[300px] py-1">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}
