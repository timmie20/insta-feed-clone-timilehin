import React from "react";
import {
  House,
  Search,
  Compass,
  Mail,
  Heart,
  SquarePlus,
  Menu,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: <House size={24} /> },
  { label: "Search", icon: <Search size={24} /> },
  { label: "Explore", icon: <Compass size={24} /> },
  { label: "Messaging", icon: <Mail size={24} /> },
  { label: "Notifications", icon: <Heart size={24} /> },
  { label: "Create", icon: <SquarePlus size={24} /> },
];

export default function Leftbar() {
  return (
    <>
      {/* ✅ Left Sidebar for Large Screens */}
      <nav
        className="hidden h-full w-64 flex-col rounded-lg border-[1px] border-slate-200 bg-white p-3 md:flex"
        role="navigation"
        aria-label="Main Navigation"
      >
        <p className="font-delicious-handrawn text-3xl font-medium">
          Instashot
        </p>

        <div className="mt-10">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="flex w-full cursor-pointer items-center gap-3 rounded-md p-2.5 text-sm hover:bg-gray-100 focus-visible:ring-1 focus-visible:ring-violet-500"
                role="menuitem"
                tabIndex={0}
              >
                <span>{item.icon}</span>
                <span className="">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-col gap-4 px-2 py-3">
          <div className="flex cursor-pointer items-center gap-3 focus-visible:ring-1 focus-visible:ring-white">
            <span>
              <Menu />
            </span>
            <span className="lg:block">Menu</span>
          </div>
          <div className="flex cursor-pointer items-center gap-3 focus-visible:ring-1 focus-visible:ring-white">
            <span>
              <LogOut />
            </span>
            <span className="lg:block">Log out</span>
          </div>
        </div>
      </nav>

      {/* ✅ Bottom Navigation for Small & Medium Screens */}
      <nav
        className="fixed right-0 bottom-0 left-0 flex justify-around border-t-[1px] border-slate-200 bg-white px-2 py-2.5 md:hidden"
        role="navigation"
        aria-label="Bottom Navigation"
      >
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex flex-col items-center text-gray-700 focus-visible:ring-1 focus-visible:ring-violet-500"
            aria-label={item.label}
          >
            <span>{React.cloneElement(item.icon, { size: 24 })}</span>
            <span className="hidden">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
