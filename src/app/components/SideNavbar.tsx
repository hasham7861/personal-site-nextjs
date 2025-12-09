'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navItems } from './Navbar.shared';


export default function SideNavbar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 p-6 dark:bg-gray-900 dark:border-gray-800 hidden md:flex flex-col">
      <div className="mb-8 flex flex-col items-center">
        <Image src="/profile.webp" alt="Profile Picture" width={100} height={100} className="rounded-full mb-4 border-2 border-gray-200" />
        <h1 className="text-2xl font-bold dark:text-white">Hasham Alam</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                isActive
                  ? 'bg-green-100 text-black dark:bg-green-100 dark:text-black'
                  : 'text-gray-500 hover:bg-green-200 hover:text-black dark:text-gray-400 dark:hover:bg-green-200 dark:hover:text-black'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}