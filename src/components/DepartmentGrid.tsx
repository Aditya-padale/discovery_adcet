import { Card, CardContent } from "@/components/ui/card";
import { 
  Plane, 
  Settings, 
  Zap, 
  Building, 
  Code, 
  Brain, 
  Shield, 
  Briefcase, 
  Utensils 
} from "lucide-react";

interface Department {
  id: string;
  name: string;
  icon: React.ReactNode;
  eventCount: number;
  gradient: string;
  description: string;
}

const departments: Department[] = [
  {
    id: "aeronautical",
    name: "Aeronautical Engineering",
    icon: <Plane className="h-8 w-8" />,
    eventCount: 3,
    gradient: "from-electric-blue to-neon-cyan",
    description: "Sky's the limit with aerospace innovation"
  },
  {
    id: "mechanical", 
    name: "Mechanical Engineering",
    icon: <Settings className="h-8 w-8" />,
    eventCount: 3,
    gradient: "from-quantum-orange to-plasma-pink",
    description: "Powering the future with mechanical excellence"
  },
  {
    id: "electrical",
    name: "Electrical Engineering", 
    icon: <Zap className="h-8 w-8" />,
    eventCount: 3,
    gradient: "from-matrix-green to-neon-cyan",
    description: "Electrifying innovations in power & energy"
  },
  {
    id: "civil",
    name: "Civil Engineering",
    icon: <Building className="h-8 w-8" />,
    eventCount: 3,
    gradient: "from-cyber-purple to-void-indigo",
    description: "Building tomorrow's smart infrastructure"
  },
  {
    id: "cse",
    name: "Computer Science Engineering",
    icon: <Code className="h-8 w-8" />,
    eventCount: 3,
    gradient: "from-electric-blue to-cyber-purple",
    description: "Coding the future with cutting-edge tech"
  },
  {
    id: "aids",
    name: "AI & Data Science",
    icon: <Brain className="h-8 w-8" />,
    eventCount: 3,
    gradient: "from-plasma-pink to-electric-blue",
    description: "Intelligence meets data-driven solutions"
  },
  {
    id: "iot",
    name: "IoT & Cyber Security",
    icon: <Shield className="h-8 w-8" />,
    eventCount: 3,
    gradient: "from-neon-cyan to-matrix-green",
    description: "Securing the connected world"
  },
  {
    id: "bba",
    name: "Business Administration",
    icon: <Briefcase className="h-8 w-8" />,
    eventCount: 1,
    gradient: "from-quantum-orange to-cyber-purple",
    description: "Strategic leadership for digital age"
  },
  {
    id: "food",
    name: "Food Technology",
    icon: <Utensils className="h-8 w-8" />,
    eventCount: 2,
    gradient: "from-plasma-pink to-quantum-orange",
    description: "Innovating sustainable food solutions"
  }
];

interface DepartmentGridProps {
  onDepartmentSelect: (department: Department) => void;
}

export const DepartmentGrid = ({ onDepartmentSelect }: DepartmentGridProps) => {
  return (
    <section id="departments" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 geometric-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-gradient-premium">
            Choose Your Domain
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore cutting-edge competitions across 9 engineering departments and 
            showcase your expertise in your field of passion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Card 
              key={dept.id}
              className="premium-card hover-lift group cursor-pointer relative overflow-hidden"
              onClick={() => onDepartmentSelect(dept)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardContent className="p-8 relative z-10">
                <div className="text-center">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${dept.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                      <div className="text-background">
                        {dept.icon}
                      </div>
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-br ${dept.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient-premium transition-all duration-500">
                    {dept.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors duration-500">
                    {dept.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-center gap-4">
                    <div className={`px-4 py-2 bg-gradient-to-r ${dept.gradient} rounded-full text-sm font-bold text-background`}>
                      {dept.eventCount} Events
                    </div>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-colors duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="glass-morphism inline-block px-8 py-4 rounded-full">
            <p className="text-foreground font-medium">
              Ready to compete? <span className="text-gradient-premium font-bold">Click any department to explore events!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export type { Department };