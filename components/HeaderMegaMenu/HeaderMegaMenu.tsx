import Image from "next/image";
import Link from "next/link";

export const HeaderMegaMenu = () => {
  return (
    <nav className="w-full bg-white dark:bg-slate-900 flex p-4  items-center justify-between">
      <div className="inline-flex space-x-2">
        <div className="h-8 w-auto">
          <Image
            src="/images/octopusNavLogo.svg"
            alt="Octopus Market Logo"
            width={170}
            height={36}
            // className="dark:invert"
          />
        </div>
      </div>
      <ul className="hidden md:flex space-x-4 dark:text-slate-100 text-slate-900">
        <li className="bg-blue-500 hover:cursor-pointer rounded-md text-slate-100 px-4 py-2">
          Home
        </li>
        <li className="px-4 py-2 hover:cursor-pointer">Blog</li>
        <li className="px-4 py-2 hover:cursor-pointer">Portfolio</li>
        <li className="px-4 py-2 hover:cursor-pointer">
          <Link href={"/login"}>Login</Link>
        </li>
      </ul>
      <button className="rounded-full bg-blue-500 p-2 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-6 w-6 dark:text-slate-900 text-slate-100"
        >
          <path
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </nav>
  );
};
