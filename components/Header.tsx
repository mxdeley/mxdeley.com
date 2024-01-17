import Link from "next/link";
const Header = () => {
  return (
    <div className="flex justify-between items-center z-50 max-w-4xl mx-auto w-full p-1 text-sm">
      <h1>
        <Link href={"/"} className="">
          @mxdeley
        </Link>
      </h1>
      <div className="flex items-center space-x-2">
        <ul className="space-x-3 font-light">
          <Link href={"/timeline"}>Timeline</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/blog"}>Blog</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
