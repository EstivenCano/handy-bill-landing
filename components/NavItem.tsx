import Link from 'next/link';

export const NavItem = (item: { name: string; path: string }) => {
  return (
    <li key={item.name} className="nav-item font-bold hover:scale-105">
      <Link href={item.path} aria-current="page">
        {item.name}
      </Link>
    </li>
  );
};
