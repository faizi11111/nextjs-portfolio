import { Navlink } from "./NavLink";
export const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Navlink href={link.href} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
};
