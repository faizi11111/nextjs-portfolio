import Link from "next/link"
export const Navlink = ({href, title}) => {
  return (
    <Link
      className="text-slate-300 hover:text-white block py-2 pl-3 pr-4"
      href={href}
    >
      {title}
    </Link>
  );
};
