import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onExploreEvents: () => void;
}

export const HeroSection = ({ onExploreEvents }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60 z-10" />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 hero-pattern z-20" />
      
      {/* Main content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="text-gradient">DISCOVERY</span>
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl text-foreground">2K25</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-4 animate-slide-in-left">
            National Level Technical Festival
          </p>
          
          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-slide-in-right">
            <div className="flex items-center gap-2 text-foreground/80">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">11th October 2025</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <MapPin className="h-5 w-5 text-secondary" />
              <span className="font-medium">ADCET Campus, Ashta</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Trophy className="h-5 w-5 text-accent" />
              <span className="font-medium">24+ Events</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Users className="h-5 w-5 text-neon-orange" />
              <span className="font-medium">₹100/- per participant</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="animate-scale-in">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onExploreEvents}
              className="animate-float"
            >
              Explore Events
            </Button>
          </div>
          
          {/* Organizing Institution */}
          <div className="mt-12 text-center animate-fade-in">
            <p className="text-sm text-muted-foreground mb-2">Organized by</p>
            <h2 className="text-lg md:text-xl font-semibold text-foreground">
              Annasaheb Dange College of Engineering and Technology, Ashta
            </h2>
            <p className="text-sm text-muted-foreground">
              NAAC A++ Accredited | Shivaji University Affiliated
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-lg animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-accent/20 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-neon-orange/20 rounded-lg animate-float" style={{ animationDelay: '0.5s' }} />
    </section>
  );
};