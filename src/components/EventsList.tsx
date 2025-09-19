import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, DollarSign, ArrowLeft, BookOpen, Sparkles, Trophy } from "lucide-react";
import { Event, getEventsByDepartment } from "@/data/events";
import { Department } from "./DepartmentGrid";

interface EventsListProps {
  department: Department;
  onBack: () => void;
  onEventSelect: (event: Event) => void;
}

export const EventsList = ({ department, onBack, onEventSelect }: EventsListProps) => {
  const events = getEventsByDepartment(department.id);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 hero-bg-pattern opacity-50" />
      <div className="absolute inset-0 geometric-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <Button variant="festival" onClick={onBack} className="hover:scale-105 transition-transform">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Departments
          </Button>
        </div>
        
        {/* Title Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 glass-morphism rounded-full">
            <Sparkles className="h-5 w-5 text-electric-blue" />
            <span className="text-sm font-semibold text-foreground">Department Events</span>
            <Trophy className="h-5 w-5 text-quantum-orange" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-gradient-premium">
            {department.name}
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              {department.description}
            </p>
            <p className="text-lg text-muted-foreground">
              Choose from <span className="text-gradient-accent font-bold">{events.length} exciting events</span> in this department
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={event.id}
              className="premium-card hover-lift group cursor-pointer relative overflow-hidden"
              onClick={() => onEventSelect(event)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${department.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-bold group-hover:text-gradient-premium transition-colors duration-500 flex items-start justify-between">
                  <span>{event.name}</span>
                  <div className="flex items-center gap-1 ml-2">
                    <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                  {event.description || "Click to explore detailed rules, guidelines, and competition information"}
                </p>
                
                {/* Event Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 glass-morphism rounded-lg">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-electric-blue" />
                      <span className="text-sm text-foreground">Team Size</span>
                    </div>
                    <Badge variant="secondary" className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
                      Max {event.maxTeamSize}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 glass-morphism rounded-lg">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-quantum-orange" />
                      <span className="text-sm text-foreground">Entry Fee</span>
                    </div>
                    <Badge variant="outline" className="bg-quantum-orange/20 text-quantum-orange border-quantum-orange/30">
                      ₹{event.entryFee}/-
                    </Badge>
                  </div>
                </div>

                {/* CTA Button */}
                <Button variant="festival" className="w-full group-hover:bg-primary/20 group-hover:border-primary/50 relative overflow-hidden">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>View Detailed Rules</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </CardContent>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-colors duration-500" />
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="premium-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient-premium">Ready to Compete?</h3>
            <p className="text-muted-foreground">
              Each event comes with detailed rules, guidelines, coordinator contacts, and submission requirements. 
              Click on any event above to get started!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};