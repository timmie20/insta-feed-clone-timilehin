import React from "react";
import Leftbar from "../components/shared/Leftbar";
import Rightbar from "../components/shared/Rightbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-screen w-screen">
      <div className="mx-auto flex max-w-screen-xl">
        {/* Left Sidebar */}
        <div className="relative w-full max-w-[250px] py-1">
          <div className="fixed h-full max-h-[800px] w-full max-w-[250px] py-1">
            <Leftbar />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Right Sidebar */}
        <div className="relative h-screen w-full max-w-[300px] py-1">
          <div className="fixed h-full w-full max-w-[300px] py-1">
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}
