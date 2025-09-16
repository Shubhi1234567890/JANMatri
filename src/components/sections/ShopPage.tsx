import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ShoppingBag, 
  Search, 
  Filter,
  Star, 
  Heart,
  Plus,
  Minus,
  ShoppingCart,
  Baby,
  Shirt,
  Utensils,
  Home,
  Package
} from 'lucide-react';

const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [favorites, setFavorites] = useState<string[]>([]);

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
    { value: 'Safety', label: 'Safety & Monitoring', icon: Home },
    { value: 'Sleep', label: 'Sleep & Comfort', icon: Home },
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
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Baby Care Shop
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Carefully curated products for your baby's comfort, safety, and development.
        </p>
      </div>

      {/* Cart Summary */}
      {getTotalItems() > 0 && (
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
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
      <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card 
            key={product.id}
            className="group border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur-sm"
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
    </div>
  );
};

export default ShopPage;