import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Stethoscope, Baby, Star, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onSectionChange: (section: string) => void;
}

const HomePage = ({ onSectionChange }: HomePageProps) => {
  const quickActions = [
    {
      id: 'yoga',
      title: 'Daily Yoga',
      description: 'Gentle exercises for post-partum recovery',
      icon: Heart,
      color: 'from-primary to-primary-light',
    },
    {
      id: 'community',
      title: 'Community',
      description: 'Connect with other mothers',
      icon: Users,
      color: 'from-secondary to-accent',
    },
    {
      id: 'doctors',
      title: 'Expert Care',
      description: 'Professional medical support',
      icon: Stethoscope,
      color: 'from-accent to-primary',
    },
  ];

  const stats = [
    { label: 'Mothers Supported', value: '2,500+', icon: Users },
    { label: 'Expert Doctors', value: '150+', icon: Stethoscope },
    { label: 'Wellness Sessions', value: '10k+', icon: Heart },
    { label: 'Success Stories', value: '98%', icon: Star },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Welcome to JANMatri
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your compassionate companion through the post-partum journey. 
          We're here to support you with expert care, community connection, and wellness guidance.
        </p>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => onSectionChange('community')}
        >
          Join Our Community
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action) => (
          <Card 
            key={action.id}
            className="group cursor-pointer border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
            onClick={() => onSectionChange(action.id)}
          >
            <CardHeader className="text-center pb-2">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {action.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-base">
                {action.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics */}
      <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Making a Difference Together</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Featured Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Baby className="w-5 h-5 text-primary" />
              Today's Wellness Tip
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              "Remember to take deep breaths and be gentle with yourself. Your recovery journey is unique, and every small step forward is progress worth celebrating."
            </p>
            <Button 
              variant="outline" 
              className="border-primary/40 hover:bg-primary/10"
              onClick={() => onSectionChange('yoga')}
            >
              Explore Wellness
            </Button>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-secondary" />
              Community Highlight
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              "Join our supportive community where mothers share experiences, offer encouragement, and celebrate milestones together. You're never alone on this journey."
            </p>
            <Button 
              variant="outline" 
              className="border-secondary/40 hover:bg-secondary/10"
              onClick={() => onSectionChange('community')}
            >
              Connect Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;