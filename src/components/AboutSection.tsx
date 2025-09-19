import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Zap, Award, Users, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb w-96 h-96 bg-electric-blue/20 top-20 -left-20 animate-pulse-slow" />
        <div className="floating-orb w-72 h-72 bg-cyber-purple/20 bottom-20 -right-20 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-gradient-premium">
            About Discovery 2K25
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              India's most prestigious national-level technical festival, bringing together 
              brilliant minds from across the country to compete, innovate, and shape the future.
            </p>
            <div className="glass-morphism p-8 rounded-2xl">
              <p className="text-lg text-foreground">
                Featuring <span className="text-gradient-accent font-bold">24+ cutting-edge competitions</span> across 
                engineering, management, IT, and food technology disciplines, designed to promote 
                <span className="text-gradient-premium font-bold"> innovation, technical excellence, and creativity</span> among students.
              </p>
            </div>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="premium-card hover-lift group">
            <CardContent className="p-8 text-center relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-electric-blue to-neon-cyan rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Lightbulb className="h-10 w-10 text-background" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient-premium transition-colors duration-500">
                  Innovation Focus
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-500">
                  Encouraging breakthrough solutions and revolutionary thinking across multiple engineering disciplines and emerging technologies.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="premium-card hover-lift group">
            <CardContent className="p-8 text-center relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-plasma-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyber-purple to-plasma-pink rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Target className="h-10 w-10 text-background" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient-premium transition-colors duration-500">
                  Technical Excellence
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-500">
                  Promoting the highest standards of technical knowledge, practical application, and professional expertise in cutting-edge fields.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="premium-card hover-lift group">
            <CardContent className="p-8 text-center relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-matrix-green/10 to-quantum-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-matrix-green to-quantum-orange rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Zap className="h-10 w-10 text-background" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient-premium transition-colors duration-500">
                  Student Empowerment
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-500">
                  Providing a prestigious platform for students to showcase their skills, compete at the national level, and network with industry leaders.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-morphism p-6 text-center hover-lift">
            <Award className="h-8 w-8 text-electric-blue mx-auto mb-3" />
            <div className="text-3xl font-bold text-gradient-premium mb-1">24+</div>
            <div className="text-sm text-muted-foreground">Competitions</div>
          </div>
          <div className="glass-morphism p-6 text-center hover-lift">
            <Users className="h-8 w-8 text-cyber-purple mx-auto mb-3" />
            <div className="text-3xl font-bold text-gradient-premium mb-1">9</div>
            <div className="text-sm text-muted-foreground">Departments</div>
          </div>
          <div className="glass-morphism p-6 text-center hover-lift">
            <Globe className="h-8 w-8 text-neon-cyan mx-auto mb-3" />
            <div className="text-3xl font-bold text-gradient-premium mb-1">National</div>
            <div className="text-sm text-muted-foreground">Level Event</div>
          </div>
          <div className="glass-morphism p-6 text-center hover-lift">
            <Target className="h-8 w-8 text-quantum-orange mx-auto mb-3" />
            <div className="text-3xl font-bold text-gradient-premium mb-1">₹100</div>
            <div className="text-sm text-muted-foreground">Per Participant</div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="premium-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient-premium">Ready to Make History?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of brilliant minds competing for glory, recognition, and amazing prizes. 
              Your journey to technical excellence starts here.
            </p>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-electric-blue/20 to-cyber-purple/20 rounded-full border border-primary/30">
              <span className="text-3xl font-black text-gradient-premium">₹100/-</span>
              <span className="text-foreground font-medium">per participant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};