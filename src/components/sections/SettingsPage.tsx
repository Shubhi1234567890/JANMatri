import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings, 
  Moon, 
  Sun, 
  Bell, 
  Shield, 
  User, 
  Heart,
  Save,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Baby
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    community: true,
    yoga: true,
    doctor: true,
    reminders: false,
    marketing: false,
  });
  const [profile, setProfile] = useState({
    name: 'Sarah Johnson',
    email: 'sarah@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    bio: 'First-time mom looking for support and connection.',
    babyBirthDate: '2024-06-15',
    interests: ['yoga', 'mental-health', 'sleep-training'],
  });
  const { toast } = useToast();

  useEffect(() => {
    // Check system theme preference
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    toast({
      title: "Theme Updated",
      description: `Switched to ${newTheme ? 'dark' : 'light'} mode`,
    });
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleProfileChange = (key: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveProfile = () => {
    // In a real app, this would save to backend
    toast({
      title: "Profile Saved",
      description: "Your profile has been updated successfully",
    });
  };

  const handleSaveNotifications = () => {
    // In a real app, this would save to backend
    toast({
      title: "Notifications Updated",
      description: "Your notification preferences have been saved",
    });
  };

  const interests = [
    { id: 'yoga', label: 'Yoga & Wellness' },
    { id: 'mental-health', label: 'Mental Health' },
    { id: 'sleep-training', label: 'Sleep Training' },
    { id: 'feeding', label: 'Feeding & Nutrition' },
    { id: 'development', label: 'Baby Development' },
    { id: 'postpartum-fitness', label: 'Postpartum Fitness' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Customize your JANMatri experience to match your preferences and needs.
        </p>
      </div>

      <Tabs defaultValue="appearance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="appearance" className="space-y-6">
          {/* Theme Settings */}
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {isDarkMode ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-primary" />}
                Theme Settings
              </CardTitle>
              <CardDescription>
                Choose between light and dark mode for your comfort.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-full">
                    {isDarkMode ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-primary" />}
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isDarkMode ? 'Easy on the eyes for night use' : 'Bright and clear for day use'}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={toggleTheme}
                />
              </div>
              
              {/* Additional theme options */}
              <div className="mt-6 space-y-4">
                <h4 className="font-medium">Color Preferences</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-gradient-to-br from-primary to-primary-light rounded-lg cursor-pointer border-2 border-primary">
                    <div className="w-full h-8 bg-gradient-to-r from-primary to-primary-light rounded mb-2"></div>
                    <p className="text-xs text-center font-medium">Rose Pink (Active)</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-400 transition-all">
                    <div className="w-full h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded mb-2"></div>
                    <p className="text-xs text-center text-white font-medium">Ocean Blue</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg cursor-pointer border-2 border-transparent hover:border-purple-400 transition-all">
                    <div className="w-full h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded mb-2"></div>
                    <p className="text-xs text-center text-white font-medium">Lavender</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          {/* Notification Settings */}
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose what notifications you'd like to receive to stay connected without being overwhelmed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Community Messages</h4>
                    <p className="text-sm text-muted-foreground">Get notified when someone replies to your posts or mentions you</p>
                  </div>
                  <Switch
                    checked={notifications.community}
                    onCheckedChange={(checked) => handleNotificationChange('community', checked)}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Yoga & Wellness Reminders</h4>
                    <p className="text-sm text-muted-foreground">Daily reminders for your wellness activities and sessions</p>
                  </div>
                  <Switch
                    checked={notifications.yoga}
                    onCheckedChange={(checked) => handleNotificationChange('yoga', checked)}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Doctor Updates</h4>
                    <p className="text-sm text-muted-foreground">Important updates from healthcare providers</p>
                  </div>
                  <Switch
                    checked={notifications.doctor}
                    onCheckedChange={(checked) => handleNotificationChange('doctor', checked)}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Personal Reminders</h4>
                    <p className="text-sm text-muted-foreground">Medication, appointments, and self-care reminders</p>
                  </div>
                  <Switch
                    checked={notifications.reminders}
                    onCheckedChange={(checked) => handleNotificationChange('reminders', checked)}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Product Updates</h4>
                    <p className="text-sm text-muted-foreground">New products, sales, and recommendations from our shop</p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => handleNotificationChange('marketing', checked)}
                  />
                </div>
              </div>

              <Button onClick={handleSaveNotifications} className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground">
                <Save className="w-4 h-4 mr-2" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          {/* Profile Settings */}
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Update your personal information and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => handleProfileChange('phone', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => handleProfileChange('location', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="baby-birth-date">Baby's Birth Date</Label>
                <Input
                  id="baby-birth-date"
                  type="date"
                  value={profile.babyBirthDate}
                  onChange={(e) => handleProfileChange('babyBirthDate', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">About You</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us a bit about yourself and your journey..."
                  value={profile.bio}
                  onChange={(e) => handleProfileChange('bio', e.target.value)}
                  className="min-h-[100px] resize-none"
                />
              </div>

              <div className="space-y-3">
                <Label>Interests & Topics</Label>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest) => (
                    <div key={interest.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={interest.id}
                        checked={profile.interests.includes(interest.id)}
                        onChange={(e) => {
                          const newInterests = e.target.checked
                            ? [...profile.interests, interest.id]
                            : profile.interests.filter(i => i !== interest.id);
                          handleProfileChange('interests', JSON.stringify(newInterests));
                        }}
                        className="rounded border-gray-300"
                      />
                      <Label htmlFor={interest.id} className="text-sm font-normal">
                        {interest.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={handleSaveProfile} className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground">
                <Save className="w-4 h-4 mr-2" />
                Save Profile
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          {/* Privacy Settings */}
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Privacy & Security
              </CardTitle>
              <CardDescription>
                Control your privacy settings and data security preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Profile Visibility</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Show my profile to other community members</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Allow others to message me directly</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Data Sharing</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Share anonymous usage data to improve the app</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Receive personalized recommendations</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Account Security</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Enable Two-Factor Authentication
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Download My Data
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <h4 className="font-medium mb-2 text-destructive">Danger Zone</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    These actions cannot be undone. Please proceed with caution.
                  </p>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our support team is here to help you with any questions or concerns about JANMatri.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button variant="outline" className="border-primary/40 hover:bg-primary/10">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline" className="border-secondary/40 hover:bg-secondary/10">
                  Help Center
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;