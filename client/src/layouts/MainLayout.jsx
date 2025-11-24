import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';

const MainLayout = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-midnight to-efficiencyBlue text-white">
    <Navigation />
    <main className="flex-grow px-6 md:px-12 py-10">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;

