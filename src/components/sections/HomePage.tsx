import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Heart, 
  Users, 
  Stethoscope, 
  Baby, 
  Star, 
  ArrowRight,
  Search,
  ShoppingCart,
  Plus,
  Minus,
  Package,
  Shirt,
  Utensils,
  Home as HomeIcon,
  MapPin,
  Phone,
  Mail,
  Clock,
  Smile,
  Brain,
  MessageSquare,
  Shield,
  Mic,
  Map,
  Calendar,
  AlertTriangle,
  Headphones,
  BookOpen,
  Activity,
  Target
} from 'lucide-react';

interface HomePageProps {
  onSectionChange: (section: string) => void;
}

const HomePage = ({ onSectionChange }: HomePageProps) => {
  // Shop functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [favorites, setFavorites] = useState<string[]>([]);

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const coreFeatures = [
    {
      id: 'yoga',
      title: 'Yoga Recommendations',
      description: 'Tailored yoga sessions and breathing exercises for new mothers',
      icon: Heart,
      color: 'from-primary to-primary-light',
    },
    {
      id: 'doctors',
      title: 'Connect with Doctors',
      description: 'Directory of postpartum health specialists',
      icon: Stethoscope,
      color: 'from-secondary to-accent',
    },
    {
      id: 'community',
      title: 'Community Connect',
      description: 'Chat and support network for mothers',
      icon: Users,
      color: 'from-accent to-primary',
    },
  ];

  const uniqueFeatures = [
    {
      id: 'mood-tracker',
      title: 'Personalized Mood Tracker',
      description: 'Log daily feelings and track mood patterns with insights',
      icon: Smile,
      color: 'from-blue-500 to-purple-500',
      details: 'Track your emotional journey with personalized insights and trend analysis'
    },
    {
      id: 'custom-yoga',
      title: 'Customized Yoga & Meditation',
      description: 'Personalized exercises based on your mood and energy levels',
      icon: Brain,
      color: 'from-green-500 to-teal-500',
      details: 'AI-powered recommendations that adapt to your current emotional state'
    },
    {
      id: 'anonymous-chat',
      title: 'Anonymous Chat Option',
      description: 'Join conversations without revealing your identity',
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-500',
      details: 'Feel safe to share openly with complete anonymity protection'
    },
    {
      id: 'support-groups',
      title: 'Moderated Support Groups',
      description: 'Topic-specific groups for focused support and discussion',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      details: 'Small, intimate groups focused on specific challenges like sleep, anxiety, or recovery'
    },
    {
      id: 'emergency-sos',
      title: 'Emergency SOS Button',
      description: 'One-tap access to mental health hotlines and trusted contacts',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500',
      details: 'Immediate help when you need it most - always just one tap away'
    },
    {
      id: 'audio-diaries',
      title: 'Audio Diaries',
      description: 'Record voice notes as therapeutic alternatives to typing',
      icon: Mic,
      color: 'from-indigo-500 to-blue-500',
      details: 'Express your thoughts naturally through voice recordings'
    },
    {
      id: 'partners-corner',
      title: "Partner's Corner",
      description: 'Resources and tips to help partners provide better support',
      icon: Users,
      color: 'from-teal-500 to-green-500',
      details: 'Educational resources to help your loved ones understand and support you'
    },
    {
      id: 'local-resources',
      title: 'Local Resources Map',
      description: 'Find nearby support groups, therapists, and services',
      icon: Map,
      color: 'from-yellow-500 to-orange-500',
      details: 'Discover local professionals and support services in your area'
    },
    {
      id: 'milestone-tracker',
      title: 'Infant Milestone Tracker',
      description: 'Track baby development milestones for peace of mind',
      icon: Calendar,
      color: 'from-pink-500 to-purple-500',
      details: 'Monitor your baby\'s growth and development with expert guidance'
    },
  ];

  const stats = [
    { label: 'Mothers Supported', value: '2,500+', icon: Users },
    { label: 'Expert Doctors', value: '150+', icon: Stethoscope },
    { label: 'Wellness Sessions', value: '10k+', icon: Heart },
    { label: 'Success Stories', value: '98%', icon: Star },
  ];

  // Shop products
  const products = [
    {
      id: '1',
      name: 'Organic Cotton Baby Onesies (3-Pack)',
      description: 'Soft, breathable organic cotton onesies perfect for sensitive baby skin',
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviews: 127,
      category: 'Clothing',
      image: '👕',
      inStock: true,
      brand: 'BabyPure',
      features: ['Organic Cotton', 'Hypoallergenic', 'Machine Washable'],
    },
    {
      id: '2',
      name: 'Gentle Baby Skincare Set',
      description: 'Complete skincare essentials with natural ingredients for baby\'s delicate skin',
      price: 32.99,
      originalPrice: 45.99,
      rating: 4.9,
      reviews: 89,
      category: 'Care',
      image: '🧴',
      inStock: true,
      brand: 'NatureCare',
      features: ['Natural Ingredients', 'Pediatrician Approved', 'Tear-Free'],
    },
    {
      id: '3',
      name: 'Smart Baby Monitor with App',
      description: 'HD video monitoring with smartphone alerts and two-way audio',
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.6,
      reviews: 203,
      category: 'Safety',
      image: '📹',
      inStock: true,
      brand: 'SafeWatch',
      features: ['HD Video', 'Night Vision', 'Mobile App'],
    },
    {
      id: '4',
      name: 'Baby Feeding Starter Kit',
      description: 'Everything you need for safe and easy baby feeding',
      price: 45.99,
      originalPrice: 65.99,
      rating: 4.7,
      reviews: 156,
      category: 'Feeding',
      image: '🍼',
      inStock: true,
      brand: 'FeedWell',
      features: ['BPA-Free', 'Anti-Colic', 'Easy Grip'],
    },
    {
      id: '5',
      name: 'Cozy Baby Blanket Set',
      description: 'Ultra-soft bamboo fiber blankets for comfortable sleep',
      price: 39.99,
      originalPrice: 55.99,
      rating: 4.8,
      reviews: 94,
      category: 'Sleep',
      image: '🛏️',
      inStock: false,
      brand: 'CloudComfort',
      features: ['Bamboo Fiber', 'Temperature Regulating', 'Breathable'],
    },
    {
      id: '6',
      name: 'Interactive Learning Toys Set',
      description: 'Age-appropriate toys to stimulate baby\'s development and learning',
      price: 56.99,
      originalPrice: 78.99,
      rating: 4.5,
      reviews: 67,
      category: 'Toys',
      image: '🧸',
      inStock: true,
      brand: 'PlaySmart',
      features: ['Educational', 'Safe Materials', 'Age Appropriate'],
    },
  ];

  const categories = [
    { value: 'all', label: 'All Products', icon: Package },
    { value: 'Clothing', label: 'Baby Clothing', icon: Shirt },
    { value: 'Care', label: 'Baby Care', icon: Baby },
    { value: 'Feeding', label: 'Feeding', icon: Utensils },
    { value: 'Safety', label: 'Safety & Monitoring', icon: HomeIcon },
    { value: 'Sleep', label: 'Sleep & Comfort', icon: HomeIcon },
    { value: 'Toys', label: 'Toys & Learning', icon: Baby },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [productId, quantity]) => {
      const product = products.find(p => p.id === productId);
      return sum + (product?.price || 0) * quantity;
    }, 0);
  };

  return (
    <div className="space-y-24 animate-fade-in">
      {/* Welcome Section */}
      <section className="text-center py-12 scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
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
      </section>

      {/* Core App Features */}
      <section className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Core Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essential tools designed specifically for your postpartum journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreFeatures.map((feature, index) => (
            <Card 
              key={feature.id}
              className="group cursor-pointer border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
              onClick={() => onSectionChange(feature.id)}
            >
              <CardHeader className="text-center pb-2">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Unique & Advanced Features */}
      <section className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Advanced Support Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative features designed to provide comprehensive support for your unique journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueFeatures.map((feature, index) => (
            <Card 
              key={feature.id}
              className="group cursor-pointer border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm overflow-hidden"
              onClick={() => onSectionChange(feature.id)}
            >
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
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
      </section>

      {/* Featured Content */}
      <section className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
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

          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform duration-300" />
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
      </section>

      {/* Baby Care Shop Section */}
      <section className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
        <div className="text-center py-8 mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Baby Care Shop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully curated products for your baby's comfort, safety, and development.
          </p>
        </div>

        {/* Cart Summary */}
        {getTotalItems() > 0 && (
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 mb-8 scroll-animate opacity-0 translate-y-4 transition-all duration-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    {getTotalItems()} item{getTotalItems() > 1 ? 's' : ''} in cart
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-primary">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                  <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground">
                    Checkout
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search and Filters */}
        <Card className="border-primary/20 bg-card/80 backdrop-blur-sm mb-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center gap-2">
                        <category.icon className="w-4 h-4" />
                        {category.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id}
              className="group border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 bg-card/80 backdrop-blur-sm scroll-animate opacity-0 translate-y-4"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-4xl mb-2">{product.image}</div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFavorite(product.id)}
                    className={`${
                      favorites.includes(product.id)
                        ? 'text-red-500 hover:text-red-600'
                        : 'text-muted-foreground hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                  </Button>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <Badge variant="outline" className="text-xs mb-2">{product.brand}</Badge>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="line-clamp-2">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {product.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.features.length - 2} more
                      </Badge>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </Badge>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  {/* Add to Cart */}
                  {product.inStock ? (
                    <div className="flex items-center gap-2">
                      {cart[product.id] ? (
                        <div className="flex items-center gap-2 flex-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeFromCart(product.id)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="font-medium min-w-[2rem] text-center">
                            {cart[product.id]}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addToCart(product.id)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          onClick={() => addToCart(product.id)}
                          className="flex-1 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      )}
                    </div>
                  ) : (
                    <Button variant="outline" disabled className="w-full">
                      Out of Stock
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center">Why Shop with JANMatri?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">✅</div>
                <h3 className="font-medium mb-1">Expert Curated</h3>
                <p className="text-sm text-muted-foreground">
                  Products selected by pediatricians and child development experts
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🚚</div>
                <h3 className="font-medium mb-1">Fast & Safe Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Free shipping on orders over $50 with secure packaging
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">💝</div>
                <h3 className="font-medium mb-1">Money-Back Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  30-day return policy for your peace of mind
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* About Us Section */}
      <section className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            About JANMatri
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              JANMatri was founded with a simple yet powerful mission: to ensure no mother faces the challenges of postpartum life alone. Our platform combines cutting-edge technology with human compassion to create a comprehensive support system for new mothers.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">To provide comprehensive, accessible, and compassionate support for every mother's postpartum journey.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Community</h3>
                  <p className="text-sm text-muted-foreground">A safe, supportive space where mothers can connect, share experiences, and find strength in solidarity.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <Stethoscope className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expert Care</h3>
                  <p className="text-sm text-muted-foreground">Access to qualified healthcare professionals specializing in postpartum mental and physical health.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Why JANMatri?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">24/7</Badge>
                  <span className="text-sm">Round-the-clock support and resources</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">Safe</Badge>
                  <span className="text-sm">Anonymous and confidential environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">Expert</Badge>
                  <span className="text-sm">Professional guidance and medical expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-muted text-muted-foreground">Free</Badge>
                  <span className="text-sm">Core features available at no cost</span>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary mb-1">2018</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-secondary mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Mothers Helped</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-primary-foreground hover:scale-105 transition-all duration-300"
            onClick={() => onSectionChange('community')}
          >
            Start Your Journey With Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;