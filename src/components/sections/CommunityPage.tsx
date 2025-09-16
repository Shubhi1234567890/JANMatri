import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageCircle, 
  Heart, 
  Users, 
  Send, 
  Search,
  Plus,
  Clock,
  Star,
  Reply,
  ThumbsUp,
  Baby
} from 'lucide-react';

const CommunityPage = () => {
  const [newPost, setNewPost] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const discussions = [
    {
      id: '1',
      author: 'Sarah M.',
      title: 'Sleep deprivation is real - how are you coping?',
      content: 'My little one is 3 months old and I\'m still struggling with sleep. Some nights I get maybe 2 hours total. How did you all manage in the early months?',
      time: '2 hours ago',
      replies: 15,
      likes: 8,
      category: 'Sleep & Rest',
      avatar: '👩',
      isSupported: false,
    },
    {
      id: '2',
      author: 'Jessica L.',
      title: 'Feeling overwhelmed - is this normal?',
      content: 'I love my baby so much, but I feel like I\'m drowning. Everything feels so hard right now. Please tell me it gets easier?',
      time: '4 hours ago',
      replies: 23,
      likes: 12,
      category: 'Mental Health',
      avatar: '👩‍🦰',
      isSupported: true,
    },
    {
      id: '3',
      author: 'Maria C.',
      title: 'Breastfeeding journey - wins and challenges',
      content: 'After 6 weeks, I finally feel like we\'re getting the hang of it! To all the mamas struggling - you\'re not alone and you\'re doing great.',
      time: '6 hours ago',
      replies: 18,
      likes: 25,
      category: 'Feeding',
      avatar: '👩‍🦱',
      isSupported: false,
    },
    {
      id: '4',
      author: 'Amy K.',
      title: 'Partner support during postpartum',
      content: 'How did you help your partner understand what you\'re going through? I feel like he tries but doesn\'t really get it.',
      time: '8 hours ago',
      replies: 31,
      likes: 19,
      category: 'Relationships',
      avatar: '👩‍💼',
      isSupported: false,
    },
  ];

  const supportGroups = [
    {
      id: '1',
      name: 'First Time Moms',
      members: 1247,
      description: 'Support for navigating motherhood for the first time',
      lastActive: 'Active now',
      icon: '🍼',
    },
    {
      id: '2',
      name: 'Postpartum Anxiety Warriors',
      members: 892,
      description: 'Safe space for discussing anxiety and finding coping strategies',
      lastActive: '5 minutes ago',
      icon: '💙',
    },
    {
      id: '3',
      name: 'Sleep Training Support',
      members: 654,
      description: 'Tips, advice, and encouragement for better baby sleep',
      lastActive: '12 minutes ago',
      icon: '🌙',
    },
    {
      id: '4',
      name: 'Breastfeeding Circle',
      members: 1156,
      description: 'Share experiences, ask questions, celebrate milestones',
      lastActive: '1 hour ago',
      icon: '🤱',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Posts', color: 'primary' },
    { id: 'Mental Health', label: 'Mental Health', color: 'secondary' },
    { id: 'Sleep & Rest', label: 'Sleep & Rest', color: 'accent' },
    { id: 'Feeding', label: 'Feeding', color: 'primary' },
    { id: 'Relationships', label: 'Relationships', color: 'secondary' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDiscussions = selectedCategory === 'all' 
    ? discussions 
    : discussions.filter(post => post.category === selectedCategory);

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      // In a real app, this would submit to backend
      console.log('New post:', newPost);
      setNewPost('');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Community Connect
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A safe, supportive space where mothers connect, share experiences, and lift each other up.
        </p>
      </div>

      <Tabs defaultValue="discussions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="groups">Support Groups</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="space-y-6">
          {/* Create New Post */}
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-primary" />
                Share with the Community
              </CardTitle>
              <CardDescription>
                Your voice matters. Share your experience, ask for advice, or offer support to fellow mothers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  placeholder="What's on your mind? Remember, this is a safe space..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[100px] resize-none"
                />
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {categories.slice(1).map((category) => (
                      <Badge key={category.id} variant="outline" className="cursor-pointer hover:bg-primary/10">
                        {category.label}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    onClick={handlePostSubmit}
                    disabled={!newPost.trim()}
                    className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Search and Filter */}
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search discussions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="transition-all duration-200"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Discussions */}
          <div className="space-y-4">
            {filteredDiscussions.map((discussion) => (
              <Card 
                key={discussion.id}
                className="group border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{discussion.avatar}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {discussion.author}
                          </CardTitle>
                          {discussion.isSupported && (
                            <Badge variant="secondary" className="text-xs">
                              <Heart className="w-3 h-3 mr-1 fill-current" />
                              Supported
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {discussion.time}
                          <Badge variant="outline" className="text-xs">
                            {discussion.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-3">{discussion.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{discussion.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {discussion.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <Reply className="w-4 h-4 mr-1" />
                        {discussion.replies}
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="border-primary/40 hover:bg-primary/10">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Join Discussion
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="groups" className="space-y-6">
          {/* Support Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportGroups.map((group) => (
              <Card 
                key={group.id}
                className="group border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{group.icon}</div>
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {group.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Users className="w-3 h-3" />
                          {group.members.toLocaleString()} members
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{group.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {group.lastActive}
                    </div>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground"
                    >
                      Join Group
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Community Guidelines */}
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Community Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Be kind and supportive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Respect privacy and confidentiality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">No medical advice - seek professional help</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Share experiences, not diagnoses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Report concerning content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Celebrate each other's victories</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunityPage;