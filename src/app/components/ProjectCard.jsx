import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
export const ProjectCard = ({ title, imageUrl, description }) => {
  return (
    <div className="mb-4">
      <div
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
        className="h-52 md:h-72 rounded-t-xl relative group"
      >
        {" "}
        <div className="overlay absolute top-0 left-0 w-full h-full bg-slate-950 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-5000 justify-center items-center">
          <Link
            href="#"
            className="mr-8 h-14 w-14 relative rounded-full border-2 group/link hover:border-white border-slate-300 cursor-pointer"
          >
            <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-300 group-hover/link:text-white" />
          </Link>
          <Link
            href="#"
            className="h-14 w-14 relative rounded-full border-2 group/link hover:border-white border-slate-300 cursor-pointer"
          >
            <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-300 group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-slate-900 px-4 py-2">
        <h5 className="font-semibold text-xl mb-2">{title}</h5>
        <p className="text-slate-300">{description}</p>
      </div>
    </div>
  );
};
