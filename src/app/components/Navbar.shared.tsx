import { Home, User, Briefcase, Mail, FileText } from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '/', icon: <Home size={20} /> },
  { name: 'About', href: '/about', icon: <User size={20} /> },
  { name: 'Projects', href: '/projects', icon: <Briefcase size={20} /> },
  { name: 'Blog', href: '/blog', icon: <FileText size={20} /> },
  { name: 'Contact', href: '/contact', icon: <Mail size={20} /> },
];
