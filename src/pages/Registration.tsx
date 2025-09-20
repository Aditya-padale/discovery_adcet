import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, UserPlus, Users, Calendar, Award, IndianRupee, ArrowLeft } from "lucide-react";
import { getAllEvents, type Event } from "@/data/events";

const registrationSchema = z.object({
  selectedEvent: z.string().min(1, "Please select an event"),
  teamSize: z.string().min(1, "Please select team size"),
  participantNames: z.string().min(2, "Please enter the full names of all participants"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z.string().min(10, "Please enter a valid mobile number").regex(/^\d{10,15}$/, "Mobile number should contain only digits"),
  college: z.string().min(2, "Please enter your college/institution name"),
  department: z.string().min(1, "Please select your department"),
  yearOfStudy: z.string().min(1, "Please select your year of study"),
  city: z.string().min(2, "Please enter your city"),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

const departments = [
  "Aeronautical Engineering",
  "Mechanical Engineering", 
  "Electrical Engineering",
  "Civil Engineering",
  "Computer Science Engineering",
  "AI & Data Science",
  "IoT & Cyber Security",
  "Business Administration",
  "Food Technology",
  "Other"
];

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate", "Post Graduate"];

interface RegistrationPageProps {
  eventTitle?: string;
  onBack?: () => void;
}

export const Registration = ({ eventTitle, onBack }: RegistrationPageProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [teamSize, setTeamSize] = useState<number>(1);
  const [totalFee, setTotalFee] = useState<number>(0);
  const { toast } = useToast();

  const allEvents = getAllEvents();

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      selectedEvent: "",
      teamSize: "",
      participantNames: "",
      email: "",
      mobile: "",
      college: "",
      department: "",
      yearOfStudy: "",
      city: "",
    },
  });

  // Calculate total fee when event or team size changes
  useEffect(() => {
    if (selectedEvent && teamSize > 0) {
      setTotalFee(selectedEvent.entryFee * teamSize);
    } else {
      setTotalFee(0);
    }
  }, [selectedEvent, teamSize]);

  const handleEventChange = (eventId: string) => {
    const event = allEvents.find(e => e.id === eventId);
    setSelectedEvent(event || null);
    form.setValue("selectedEvent", eventId);
    
    // Reset team size when event changes
    setTeamSize(1);
    form.setValue("teamSize", "1");
  };

  const handleTeamSizeChange = (size: string) => {
    const sizeNum = parseInt(size);
    setTeamSize(sizeNum);
    form.setValue("teamSize", size);
  };

  const onSubmit = async (values: RegistrationFormValues) => {
    try {
      setIsSubmitting(true);
      
      // Here you would typically send the data to your backend
      console.log({
        ...values,
        selectedEvent: selectedEvent?.name,
        teamSize,
        totalFee,
        registrationDate: new Date().toISOString(),
      });

      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "Your registration has been submitted. You will receive a confirmation email shortly.",
      });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
        setSelectedEvent(null);
        setTeamSize(1);
      }, 5000);
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center festival-card border-green-500/30 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
          <CardContent className="pt-6">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-green-600 mb-2">Registration Successful!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for registering{eventTitle ? ` for ${eventTitle}` : ""} for Discovery 2K25! 
              You will receive a confirmation email with further details shortly.
            </p>
            <div className="space-y-2">
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full">
                Register Another Participant
              </Button>
              {onBack && (
                <Button onClick={onBack} className="w-full">
                  Back to Home
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          {onBack && (
            <Button variant="ghost" onClick={onBack} className="hover:bg-primary/20">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          )}
          <div className="flex-1" />
        </div>

        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <UserPlus className="h-10 w-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              Register for Discovery 2K25
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join us for Discovery 2K25 - A National Level Technical Festival. 
            Register now to participate in exciting events and compete with the best minds!
          </p>
          
          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">24+ Events</h3>
              <p className="text-sm text-muted-foreground text-center">
                Multiple technical events across all departments
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-lg hover:border-secondary/40 transition-colors">
              <Calendar className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold text-lg mb-2">October 11, 2025</h3>
              <p className="text-sm text-muted-foreground text-center">
                One day packed with technical competitions
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-lg hover:border-accent/40 transition-colors">
              <Award className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">₹100/- Only</h3>
              <p className="text-sm text-muted-foreground text-center">
                Affordable entry fee per participant
              </p>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <Card className="festival-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Registration Form</CardTitle>
            <CardDescription>
              Fill out the form below to register for Discovery 2K25
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Event Selection */}
                <div className="bg-muted/30 p-6 rounded-lg border-2 border-primary/20">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Event Selection & Team Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <FormField
                      control={form.control}
                      name="selectedEvent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Select Event *</FormLabel>
                          <Select onValueChange={handleEventChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose an event" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="max-h-60">
                              {allEvents.map((event) => (
                                <SelectItem key={event.id} value={event.id}>
                                  <div className="flex flex-col">
                                    <span className="font-medium">{event.name}</span>
                                    <span className="text-xs text-muted-foreground">{event.department}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {selectedEvent && (
                      <FormField
                        control={form.control}
                        name="teamSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Team Size *</FormLabel>
                            <Select onValueChange={handleTeamSizeChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select team size" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Array.from({ length: selectedEvent.maxTeamSize }, (_, i) => i + 1).map((size) => (
                                  <SelectItem key={size} value={size.toString()}>
                                    {size} {size === 1 ? 'Participant' : 'Participants'}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>

                  {selectedEvent && teamSize > 0 && (
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-primary">{selectedEvent.name}</h4>
                          <p className="text-sm text-muted-foreground">{selectedEvent.department}</p>
                          <p className="text-sm text-muted-foreground">
                            Team Size: {teamSize} {teamSize === 1 ? 'Participant' : 'Participants'}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary flex items-center gap-1">
                            <IndianRupee className="h-5 w-5" />
                            {totalFee}/-
                          </p>
                          <p className="text-xs text-muted-foreground">
                            ₹{selectedEvent.entryFee}/- per participant
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="participantNames"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Full Name{teamSize > 1 ? 's' : ''} (All Participants) *
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={
                                teamSize > 1 
                                  ? `Enter the full names of all ${teamSize} participants (one per line)`
                                  : "Enter your full name"
                              }
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                          {teamSize > 1 && (
                            <p className="text-xs text-muted-foreground">
                              Please enter one name per line for {teamSize} participants
                            </p>
                          )}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number (WhatsApp preferred) *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="9876543210"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your city"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="college"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>College / Institution Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your college or institution name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {departments.map((dept) => (
                                <SelectItem key={dept} value={dept}>
                                  {dept}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="yearOfStudy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year of Study *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select year" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {years.map((year) => (
                                <SelectItem key={year} value={year}>
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting || !selectedEvent || !teamSize}
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-lg font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Submitting Registration...
                          </>
                        ) : (
                          <>
                            <UserPlus className="mr-2 h-5 w-5" />
                            Submit Registration {totalFee > 0 && `(₹${totalFee}/-)`}
                          </>
                        )}
                      </Button>
                      {!selectedEvent && (
                        <p className="text-xs text-muted-foreground text-center mt-2">
                          Please select an event to continue
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Need help with registration? Contact us at{" "}
            <a href="mailto:discovery@adcet.in" className="text-primary hover:underline">
              discovery@adcet.in
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Registration deadline: October 7, 2025 | Event Date: October 11, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;