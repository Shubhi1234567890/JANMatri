import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Clock, Users, Play, Star, Bookmark } from 'lucide-react';

const YogaPage = () => {
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  const toggleBookmark = (id: string) => {
    setBookmarked(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const yogaPrograms = [
    {
      id: '1',
      title: 'Gentle Post-Partum Recovery',
      description: 'Designed specifically for new mothers to rebuild core strength and flexibility',
      duration: '15 min',
      difficulty: 'Beginner',
      sessions: 7,
      rating: 4.9,
      category: 'recovery',
      image: '🧘‍♀️',
    },
    {
      id: '2',
      title: 'Stress Relief & Relaxation',
      description: 'Calming techniques to manage anxiety and promote mental wellness',
      duration: '20 min',
      difficulty: 'All Levels',
      sessions: 5,
      rating: 4.8,
      category: 'mental-health',
      image: '🌸',
    },
    {
      id: '3',
      title: 'Energy Boost Routine',
      description: 'Gentle energizing poses for when you need a natural lift',
      duration: '12 min',
      difficulty: 'Beginner',
      sessions: 6,
      rating: 4.7,
      category: 'energy',
      image: '☀️',
    },
    {
      id: '4',
      title: 'Better Sleep Practice',
      description: 'Evening routine to help you unwind and prepare for restful sleep',
      duration: '18 min',
      difficulty: 'All Levels',
      sessions: 4,
      rating: 4.9,
      category: 'sleep',
      image: '🌙',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Programs', color: 'primary' },
    { id: 'recovery', label: 'Recovery', color: 'secondary' },
    { id: 'mental-health', label: 'Mental Health', color: 'accent' },
    { id: 'energy', label: 'Energy', color: 'primary' },
    { id: 'sleep', label: 'Sleep', color: 'secondary' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPrograms = selectedCategory === 'all' 
    ? yogaPrograms 
    : yogaPrograms.filter(program => program.category === selectedCategory);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Yoga & Wellness
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Gentle, expert-designed programs to support your post-partum recovery and mental wellness journey.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="transition-all duration-200"
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPrograms.map((program) => (
          <Card 
            key={program.id}
            className="group border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur-sm"
          >
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div className="text-4xl mb-2">{program.image}</div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleBookmark(program.id)}
                  className={`${
                    bookmarked.includes(program.id) 
                      ? 'text-primary hover:text-primary-dark' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${bookmarked.includes(program.id) ? 'fill-current' : ''}`} />
                </Button>
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">
                {program.title}
              </CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {program.duration}
                </Badge>
                <Badge variant="outline" className="border-primary/30">
                  {program.difficulty}
                </Badge>
                <Badge variant="outline" className="border-accent/30 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {program.sessions} sessions
                </Badge>
                <Badge variant="outline" className="border-secondary/30 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current text-yellow-500" />
                  {program.rating}
                </Badge>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Session
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Today's Recommendations */}
      <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Personalized for You Today
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-card/50 rounded-lg border border-primary/20">
              <div className="text-2xl mb-2">🌅</div>
              <h3 className="font-medium mb-1">Morning Routine</h3>
              <p className="text-sm text-muted-foreground">Gentle awakening stretches</p>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg border border-primary/20">
              <div className="text-2xl mb-2">☀️</div>
              <h3 className="font-medium mb-1">Midday Boost</h3>
              <p className="text-sm text-muted-foreground">5-minute energy lift</p>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg border border-primary/20">
              <div className="text-2xl mb-2">🌜</div>
              <h3 className="font-medium mb-1">Evening Wind-down</h3>
              <p className="text-sm text-muted-foreground">Relaxation for better sleep</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default YogaPage;