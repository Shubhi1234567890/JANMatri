import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { 
  Home, 
  Heart, 
  Users, 
  ShoppingBag, 
  Settings, 
  Menu,
  Stethoscope,
  MessageCircle
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'yoga', label: 'Yoga & Wellness', icon: Heart },
    { id: 'doctors', label: 'Connect with Doctors', icon: Stethoscope },
    { id: 'community', label: 'Community Connect', icon: MessageCircle },
    { id: 'shop', label: 'Baby Care Shop', icon: ShoppingBag },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleItemClick = (id: string) => {
    onSectionChange(id);
    setIsOpen(false);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          JANMatri
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Supporting motherhood journey
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "default" : "ghost"}
            className={`w-full justify-start gap-3 transition-all duration-200 ${
              activeSection === item.id 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'hover:bg-accent/50 hover:text-accent-foreground'
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
          <p className="text-sm text-center text-muted-foreground">
            "Every mother deserves support and care on her journey"
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="fixed top-4 left-4 z-50 lg:hidden bg-card/80 backdrop-blur-sm border-primary/20"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0 bg-card border-r border-primary/20">
          <SheetHeader className="p-6 pb-0">
            <SheetTitle className="sr-only">JANMatri Navigation</SheetTitle>
          </SheetHeader>
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-80 bg-card/50 backdrop-blur-sm border-r border-primary/20">
        <SidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;