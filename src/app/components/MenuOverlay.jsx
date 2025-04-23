"use client";
import { Navlink } from "./NavLink";

export const MenuOverlay = ({ links, setOpen }) => {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="absolute left-0 top-[62px] w-full h-[calc(100vh-62px)] bg-card">
      <ul className="h-full flex flex-col items-center justify-center gap-8">
        {links.map((link, index) => {
          return (
            <li key={index} onClick={handleClick}>
              <Navlink href={link.href} title={link.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
