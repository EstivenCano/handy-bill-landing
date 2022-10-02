import Link from 'next/link';
import { useState } from 'react';

import links from './links.json';

export const NavMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        onClick={() => setOpen((prevState) => !prevState)}
        onMouseOutCapture={() => setOpen((prevState) => prevState || true)}
        className="p-2 rounded-lg md:hidden focus:ring-2 hover:bg-foreground focus:ring-primary-700 text-gray-400"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`${
          open ? 'hidden opacity-0' : 'opacity-100'
        } transition-opacity ease-linear delay-150 md:hidden absolute p-2 right-2 top-14 z-10 w-32 bg-foreground rounded-lg shadow-md `}
      >
        <ul
          className="text-sm text-gray-700 dark:text-gray-200 w-full"
          aria-labelledby="dropdownDefault"
        >
          {links.map(({ name, path }) => (
            <li
              key={name}
              className="w-full text-content font-bold tracking-wide p-1 border-b-2 border-b-primary/5 last:border-none"
            >
              <Link href={path} aria-current="page">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
