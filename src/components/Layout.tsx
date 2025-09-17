import { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/AppSidebar';
import FloatingCubes from '@/components/FloatingCubes';
import HomePage from '@/components/sections/HomePage';
import YogaPage from '@/components/sections/YogaPage';
import DoctorsPage from '@/components/sections/DoctorsPage';
import CommunityPage from '@/components/sections/CommunityPage';

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
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage onSectionChange={setActiveSection} />;
    }
  };

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen bg-background relative overflow-hidden w-full">
        {/* Floating Cubes Animation Background */}
        <FloatingCubes />
        
        {/* Sidebar Toggle Button */}
        <div className="fixed top-4 left-4 z-50">
          <SidebarTrigger className="bg-card/80 backdrop-blur-sm border-primary/20" />
        </div>
        
        {/* Main Layout */}
        <div className="flex relative z-10 w-full">
          {/* Sidebar */}
          <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 py-8 lg:px-8 max-w-7xl min-h-screen">
              <div className="pt-16 lg:pt-0">
                {renderContent()}
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;