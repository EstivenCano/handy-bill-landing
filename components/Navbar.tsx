import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  const links = [
    { path: '/', name: 'Home' },
    { path: '/', name: 'About' },
    { path: '/', name: 'Services' },
    { path: '/', name: 'Pricing' },
    { path: '/', name: 'Contact' },
  ];

  return (
    <nav className="px-2 sm:px-4 rounded w-full py-2">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Image
          src="/images/favicon.ico"
          width={50}
          height={50}
          alt="handy-bill-logo"
        />
        <h4 className="font-bold whitespace-nowrap">Handy Bill</h4>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {links.map((item) => (
              <li
                key={item.name}
                className="nav-item font-bold hover:scale-105"
              >
                <Link href={item.path} aria-current="page">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
