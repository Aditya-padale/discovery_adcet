import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DepartmentGrid, Department } from "@/components/DepartmentGrid";
import { EventsList } from "@/components/EventsList";
import { EventDetails } from "@/components/EventDetails";
import { ScheduleSection } from "@/components/ScheduleSection";
import { ContactSection } from "@/components/ContactSection";
import { Event } from "@/data/events";

type ViewState = 
  | { type: 'home' }
  | { type: 'events'; department: Department }
  | { type: 'event-details'; event: Event };

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>({ type: 'home' });

  const handleExploreEvents = () => {
    const departmentsSection = document.getElementById('departments');
    departmentsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDepartmentSelect = (department: Department) => {
    setCurrentView({ type: 'events', department });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEventSelect = (event: Event) => {
    setCurrentView({ type: 'event-details', event });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView({ type: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToEvents = () => {
    if (currentView.type === 'event-details') {
      // Get the department from the event to go back to the right events list
      const event = currentView.event;
      const departmentId = event.department.toLowerCase().replace(/[^a-z]/g, '');
      
      // Find the matching department
      const departmentMap: Record<string, Department> = {
        'aeronauticalengineering': {
          id: 'aeronautical',
          name: 'Aeronautical Engineering',
          icon: null,
          eventCount: 3,
          gradient: 'from-neon-blue to-primary'
        },
        'mechanicalengineering': {
          id: 'mechanical',
          name: 'Mechanical Engineering', 
          icon: null,
          eventCount: 3,
          gradient: 'from-neon-orange to-accent'
        },
        'electricalengineering': {
          id: 'electrical',
          name: 'Electrical Engineering',
          icon: null,
          eventCount: 3,
          gradient: 'from-neon-green to-secondary'
        },
        'civilengineering': {
          id: 'civil',
          name: 'Civil Engineering',
          icon: null,
          eventCount: 3,
          gradient: 'from-neon-purple to-primary'
        },
        'computerscienceengineering': {
          id: 'cse',
          name: 'Computer Science Engineering',
          icon: null,
          eventCount: 3,
          gradient: 'from-primary to-neon-pink'
        },
        'aidatascience': {
          id: 'aids',
          name: 'AI & Data Science',
          icon: null,
          eventCount: 3,
          gradient: 'from-secondary to-neon-blue'
        },
        'iotcybersecurity': {
          id: 'iot',
          name: 'IoT & Cyber Security',
          icon: null,
          eventCount: 3,
          gradient: 'from-accent to-neon-green'
        },
        'businessadministration': {
          id: 'bba',
          name: 'Business Administration',
          icon: null,
          eventCount: 1,
          gradient: 'from-neon-orange to-neon-purple'
        },
        'foodtechnology': {
          id: 'food',
          name: 'Food Technology',
          icon: null,
          eventCount: 2,
          gradient: 'from-neon-pink to-neon-orange'
        }
      };

      const department = departmentMap[departmentId];
      if (department) {
        setCurrentView({ type: 'events', department });
      } else {
        handleBackToHome();
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView.type === 'events') {
    return (
      <EventsList 
        department={currentView.department}
        onBack={handleBackToHome}
        onEventSelect={handleEventSelect}
      />
    );
  }

  if (currentView.type === 'event-details') {
    return (
      <EventDetails 
        event={currentView.event}
        onBack={handleBackToEvents}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <HeroSection onExploreEvents={handleExploreEvents} />
      <AboutSection />
      <DepartmentGrid onDepartmentSelect={handleDepartmentSelect} />
      <ScheduleSection />
      <ContactSection />
    </div>
  );
};

export default Index;