import Leftbar from "../components/shared/Leftbar";
import Rightbar from "../components/shared/Rightbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-screen w-screen">
      <div className="mx-auto flex max-w-screen-xl">
        {/* Left Sidebar - Desktop */}
        <div className="fixed top-0 left-0 hidden h-full max-h-[800px] w-64 overflow-y-auto bg-white shadow-lg md:flex">
          <Leftbar />
        </div>

        {/* Main Content */}
        <main className="relative z-10 flex-1 md:pl-[270px] xl:pl-[100px]">
          {children}
        </main>

        {/* Bottom Navbar - Mobile */}
        <div className="fixed right-0 bottom-0 left-0 z-20 bg-white shadow-md md:hidden">
          <Leftbar />
        </div>

        {/* Right Sidebar - Large Screens Only */}
        <div className="relative hidden h-screen w-full max-w-[300px] py-1 xl:block">
          <div className="fixed h-full w-full max-w-[300px] py-1">
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}
