'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './Navbar.shared';


export default function SideNavbar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold dark:text-white">Hasham Alam</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Developer</p>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
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