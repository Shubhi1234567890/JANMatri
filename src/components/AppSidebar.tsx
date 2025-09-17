import { 
  Home, 
  Heart, 
  Users, 
  ShoppingBag, 
  Settings, 
  Stethoscope,
  MessageCircle
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'yoga', label: 'Yoga & Wellness', icon: Heart },
    { id: 'doctors', label: 'Connect with Doctors', icon: Stethoscope },
    { id: 'community', label: 'Community Connect', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleItemClick = (id: string) => {
    onSectionChange(id);
  };

  return (
    <Sidebar className="bg-card/50 backdrop-blur-sm border-r border-primary/20">
      <SidebarContent>
        {/* Header */}
        {!isCollapsed && (
          <div className="p-6 pb-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              JANMatri
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Supporting motherhood journey
            </p>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => handleItemClick(item.id)}
                    isActive={activeSection === item.id}
                    className="w-full justify-start gap-3 transition-all duration-200"
                  >
                    <item.icon className="w-5 h-5" />
                    {!isCollapsed && <span>{item.label}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        {!isCollapsed && (
          <div className="mt-auto p-6">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <p className="text-sm text-center text-muted-foreground">
                "Every mother deserves support and care on her journey"
              </p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}