import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Stethoscope, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Clock, 
  Search,
  Filter,
  Heart,
  Brain,
  Baby
} from 'lucide-react';

const DoctorsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const doctors = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Psychiatrist',
      subSpecialty: 'Perinatal Mental Health',
      rating: 4.9,
      experience: 12,
      location: 'New York, NY',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@healthcare.com',
      availability: 'Available Today',
      image: '👩‍⚕️',
      languages: ['English', 'Spanish'],
      bio: 'Specialized in postpartum depression and anxiety with 12+ years of experience helping new mothers.',
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Obstetrician',
      subSpecialty: 'Postpartum Care',
      rating: 4.8,
      experience: 15,
      location: 'Los Angeles, CA',
      phone: '+1 (555) 234-5678',
      email: 'michael.chen@healthcare.com',
      availability: 'Next Available: Tomorrow',
      image: '👨‍⚕️',
      languages: ['English', 'Mandarin'],
      bio: 'Expert in postpartum recovery and complications, dedicated to comprehensive maternal care.',
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      specialty: 'Therapist',
      subSpecialty: 'Family Counseling',
      rating: 4.9,
      experience: 8,
      location: 'Chicago, IL',
      phone: '+1 (555) 345-6789',
      email: 'emily.rodriguez@healthcare.com',
      availability: 'Available Today',
      image: '👩‍⚕️',
      languages: ['English', 'Spanish', 'Portuguese'],
      bio: 'Specializes in family dynamics and adjustment challenges during the postpartum period.',
    },
    {
      id: '4',
      name: 'Dr. David Park',
      specialty: 'Pediatrician',
      subSpecialty: 'Newborn Care',
      rating: 4.7,
      experience: 10,
      location: 'Seattle, WA',
      phone: '+1 (555) 456-7890',
      email: 'david.park@healthcare.com',
      availability: 'Next Available: Today 3 PM',
      image: '👨‍⚕️',
      languages: ['English', 'Korean'],
      bio: 'Focused on newborn health and development, supporting mothers through early childcare concerns.',
    },
  ];

  const specialties = [
    { value: 'all', label: 'All Specialties', icon: Stethoscope },
    { value: 'Psychiatrist', label: 'Mental Health', icon: Brain },
    { value: 'Obstetrician', label: 'Postpartum Care', icon: Heart },
    { value: 'Therapist', label: 'Therapy', icon: Heart },
    { value: 'Pediatrician', label: 'Baby Care', icon: Baby },
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.subSpecialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const getAvailabilityColor = (availability: string) => {
    if (availability.includes('Available Today')) return 'text-green-600';
    if (availability.includes('Tomorrow')) return 'text-yellow-600';
    return 'text-muted-foreground';
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Connect with Expert Doctors
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Access qualified healthcare professionals specialized in postpartum care and mental health support.
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" />
            Find Your Doctor
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="Select specialty" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty.value} value={specialty.value}>
                    <div className="flex items-center gap-2">
                      <specialty.icon className="w-4 h-4" />
                      {specialty.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDoctors.map((doctor) => (
          <Card 
            key={doctor.id}
            className="group border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur-sm"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{doctor.image}</div>
                  <div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {doctor.name}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-primary">
                      {doctor.specialty}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">{doctor.subSpecialty}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge variant="outline" className="border-primary/30 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current text-yellow-500" />
                    {doctor.rating}
                  </Badge>
                  <Badge variant="secondary">
                    {doctor.experience} years
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{doctor.bio}</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  {doctor.location}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  {doctor.phone}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  {doctor.email}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className={`w-4 h-4 ${getAvailabilityColor(doctor.availability)}`} />
                  <span className={getAvailabilityColor(doctor.availability)}>
                    {doctor.availability}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {doctor.languages.map((language) => (
                  <Badge key={language} variant="outline" className="text-xs">
                    {language}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="border-primary/40 hover:bg-primary/10">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
                <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Emergency Contact */}
      <Card className="bg-gradient-to-r from-destructive/10 to-destructive/5 border-destructive/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <Heart className="w-5 h-5" />
            24/7 Emergency Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">
            If you're experiencing a mental health emergency or having thoughts of self-harm, please reach out immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="destructive" className="flex-1">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Hotline: 988
            </Button>
            <Button variant="outline" className="flex-1 border-destructive/40">
              <Mail className="w-4 h-4 mr-2" />
              Crisis Text Line: Text HOME to 741741
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorsPage;