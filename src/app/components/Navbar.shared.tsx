import { Home, User, Briefcase, Mail, FileText } from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '/', icon: <Home size={20} /> },
  { name: 'Work', href: '/work', icon: <User size={20} /> },
  { name: 'Freelance', href: '/freelance', icon: <User size={20} /> },
  { name: 'Education', href: '/education', icon: <User size={20} /> },
  { name: 'Projects', href: '/projects', icon: <Briefcase size={20} /> },
  { name: 'Blogs', href: '/blog', icon: <FileText size={20} /> },
  { name: 'Videos', href: '/videos', icon: <FileText size={20} /> },
  { name: 'Contact', href: '/contact', icon: <Mail size={20} /> },
];
