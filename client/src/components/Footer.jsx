const Footer = () => (
  <footer className="bg-midnight border-t border-white/10">
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap gap-6 justify-between text-sm text-white/60">
      <p>© {new Date().getFullYear()} SolarOne Energy. All rights reserved.</p>
      <p className="space-x-4">
        <span>+91 8008 123 456</span>
        <span>hello@solarone.energy</span>
      </p>
    </div>
  </footer>
);

export default Footer;

