import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/dashboard', label: 'Monitoring' },
  { to: '/admin', label: 'Admin' },
  { to: '/contact', label: 'Contact' }
];

const Navigation = () => (
  <header className="sticky top-0 z-10 bg-midnight/80 backdrop-blur border-b border-white/10">
    <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
      <span className="text-2xl font-bold text-solarYellow tracking-wide">SolarOne</span>
      <div className="flex flex-wrap gap-4">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              clsx(
                'text-sm font-semibold uppercase tracking-wide transition',
                isActive ? 'text-solarYellow' : 'text-white/70 hover:text-white'
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  </header>
);

export default Navigation;

