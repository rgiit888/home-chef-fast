import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const EmergencySignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to Qckily! 🎉",
      description: "You've secured your spot! We'll contact you within 24 hours.",
    });
    setFormData({ name: "", phone: "", address: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="emergency-signup" className="py-16 bg-gradient-to-br from-destructive/10 to-destructive/5">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-destructive text-destructive-foreground inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 pulse-urgent">
            🔥 LIMITED TIME OFFER
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Early Exclusive Community of <span className="text-primary">100 Families!</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-2">
            Only <span className="text-destructive font-bold text-2xl">16 spots left!</span> (84/100 claimed)
          </p>
          <p className="text-lg mb-8">
            Get <span className="text-secondary font-semibold">2 Weeks FREE</span> + Priority Access!
          </p>
          
          <Card className="p-8 bg-card shadow-[var(--shadow-primary)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg"
                />
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <Input
                name="address"
                placeholder="Your Address (Delhi/NCR)"
                value={formData.address}
                onChange={handleChange}
                required
                className="h-12 text-lg"
              />
              
              <Button 
                type="submit" 
                className="btn-urgent w-full h-14 text-xl pulse-urgent"
              >
                Claim My Spot Now! 🚀
              </Button>
            </form>
          </Card>
          
          {/* Urgency Element */}
          <div className="mt-6 flex items-center justify-center gap-2 text-destructive font-semibold">
            <span className="animate-pulse">🔥</span>
            <span>Families in Delhi/NCR are signing up NOW!</span>
            <span className="animate-pulse">🔥</span>
          </div>
          
          {/* Social Proof Counter */}
          <div className="mt-4 bg-secondary/20 rounded-lg p-4 max-w-md mx-auto">
            <div className="text-sm text-muted-foreground">Last signup:</div>
            <div className="font-semibold">2 minutes ago from Gurgaon</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySignup;