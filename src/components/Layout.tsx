import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import FloatingCubes from '@/components/FloatingCubes';
import HomePage from '@/components/sections/HomePage';
import YogaPage from '@/components/sections/YogaPage';
import DoctorsPage from '@/components/sections/DoctorsPage';
import CommunityPage from '@/components/sections/CommunityPage';
import ShopPage from '@/components/sections/ShopPage';
import SettingsPage from '@/components/sections/SettingsPage';

const Layout = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onSectionChange={setActiveSection} />;
      case 'yoga':
        return <YogaPage />;
      case 'doctors':
        return <DoctorsPage />;
      case 'community':
        return <CommunityPage />;
      case 'shop':
        return <ShopPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Cubes Animation Background */}
      <FloatingCubes />
      
      {/* Main Layout */}
      <div className="flex relative z-10">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="container mx-auto px-4 py-8 lg:px-8 max-w-7xl">
            <div className="pt-16 lg:pt-0">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;