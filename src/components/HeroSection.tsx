import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy, Users, Sparkles, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onExploreEvents: () => void;
}

export const HeroSection = ({ onExploreEvents }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-pattern">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/90 z-10" />
      
      {/* Geometric grid pattern */}
      <div className="absolute inset-0 geometric-grid z-20 opacity-30" />
      
      {/* Floating orbs */}
      <div className="floating-orb w-96 h-96 bg-electric-blue top-20 left-20 animate-float-gentle" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-72 h-72 bg-cyber-purple top-40 right-20 animate-float-gentle" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-80 h-80 bg-neon-cyan bottom-32 left-1/4 animate-float-gentle" style={{ animationDelay: '4s' }} />
      <div className="floating-orb w-64 h-64 bg-plasma-pink bottom-20 right-1/3 animate-float-gentle" style={{ animationDelay: '1s' }} />
      
      {/* Main content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Event badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 glass-morphism rounded-full animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="h-5 w-5 text-electric-blue" />
            <span className="text-sm font-semibold text-foreground">National Level Technical Festival</span>
            <Zap className="h-5 w-5 text-neon-cyan" />
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight leading-none">
            <span className="text-gradient-premium animate-glow-pulse">DISCOVERY</span>
            <br />
            <span className="text-5xl md:text-7xl lg:text-8xl text-foreground font-light">2K25</span>
          </h1>
          
          {/* Subtitle with premium styling */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              Where Innovation Meets Excellence
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              Join the most prestigious technical competition featuring 24+ cutting-edge events
            </p>
          </div>
          
          {/* Event Details Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 animate-fade-in-scale" style={{ animationDelay: '0.8s' }}>
            <div className="premium-card p-4 hover-lift group">
              <Calendar className="h-6 w-6 text-electric-blue mb-2 mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground">Event Date</p>
              <p className="font-bold text-foreground">11th October</p>
              <p className="text-xs text-muted-foreground">2025</p>
            </div>
            <div className="premium-card p-4 hover-lift group">
              <MapPin className="h-6 w-6 text-cyber-purple mb-2 mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground">Venue</p>
              <p className="font-bold text-foreground">ADCET Campus</p>
              <p className="text-xs text-muted-foreground">Ashta</p>
            </div>
            <div className="premium-card p-4 hover-lift group">
              <Trophy className="h-6 w-6 text-neon-cyan mb-2 mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground">Events</p>
              <p className="font-bold text-foreground">24+</p>
              <p className="text-xs text-muted-foreground">Competitions</p>
            </div>
            <div className="premium-card p-4 hover-lift group">
              <Users className="h-6 w-6 text-quantum-orange mb-2 mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground">Entry Fee</p>
              <p className="font-bold text-foreground">₹100/-</p>
              <p className="text-xs text-muted-foreground">per participant</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="animate-fade-in-scale" style={{ animationDelay: '1s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onExploreEvents}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">Explore Events</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          </div>
          
          {/* Organizing Institution */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="glass-morphism p-8 max-w-2xl mx-auto rounded-2xl">
              <p className="text-sm text-muted-foreground mb-3">Proudly Organized by</p>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Annasaheb Dange College of Engineering and Technology
              </h2>
              <p className="text-sm text-muted-foreground mb-4">Ashta, Maharashtra</p>
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <div className="px-3 py-1 bg-primary/20 text-primary rounded-full">NAAC A++ Accredited</div>
                <div className="px-3 py-1 bg-secondary/20 text-secondary rounded-full">Shivaji University Affiliated</div>
                <div className="px-3 py-1 bg-accent/20 text-accent rounded-full">NBA Accredited</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};