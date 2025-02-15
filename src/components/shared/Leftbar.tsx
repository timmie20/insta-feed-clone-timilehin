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
  {
    label: "Home",
    icon: <House />,
  },
  {
    label: "Search",
    icon: <Search />,
  },
  {
    label: "Explore",
    icon: <Compass />,
  },
  {
    label: "Messaging",
    icon: <Mail />,
  },
  {
    label: "Notifications",
    icon: <Heart />,
  },
  {
    label: "Create",
    icon: <SquarePlus />,
  },
];

export default function Leftbar() {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      console.log("Menu clicked");
    }
  };
  return (
    <nav
      className="flex h-full w-full flex-1 flex-col rounded-lg border-[1px] border-slate-200 bg-white p-3"
      role="navigation"
      aria-label="Main Navigation"
    >
      <p className="font-delicious-handrawn text-3xl font-medium">Instashot</p>

      <div className="mt-10">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`${item.label === "Home" ? "bg-violet-700 text-white" : "nav-items"} flex cursor-pointer items-center gap-3 rounded-md p-2.5 focus-visible:ring-1 focus-visible:ring-violet-500`}
              role="menuitem"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  console.log(`${item.label} clicked`);
                }
              }}
            >
              <span>{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-col gap-4 px-2 py-3">
        <div
          className="flex cursor-pointer items-center gap-3 focus-visible:ring-1 focus-visible:ring-white"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e)}
        >
          <span>
            <Menu />
          </span>
          <span className="text-sm">Menu</span>
        </div>
        <div
          className="flex cursor-pointer items-center gap-3 focus-visible:ring-1 focus-visible:ring-white"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e)}
        >
          <span>
            <LogOut />
          </span>
          <span className="text-sm">Log out</span>
        </div>
      </div>
    </nav>
  );
}
