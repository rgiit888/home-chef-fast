import { useState, useEffect } from "react";
import { Gift, Clock, Zap } from "lucide-react";

const ExplodingOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-destructive/10 via-secondary/10 to-destructive/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Explosion Effect */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-destructive opacity-20 blur-3xl rounded-full"></div>
            <h2 className="relative text-5xl md:text-7xl font-bold mb-4">
              <span className="text-destructive">EXPLODING</span> <span className="text-secondary">OFFER!</span>
            </h2>
          </div>
          
          <p className="text-2xl mb-8 font-semibold">
            First <span className="text-primary font-bold">100 Signups</span> Get:
          </p>

          {/* Offers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="bg-card border-2 border-secondary rounded-2xl p-8 relative overflow-hidden">
              <Gift className="w-12 h-12 text-secondary mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-3">2 Weeks FREE Meals</h3>
              <p className="text-muted-foreground mb-4">4 meals per week</p>
              <div className="text-3xl font-bold text-secondary">₹2400 Value</div>
              
              {/* Sparkle Effect */}
              <div className="absolute top-2 right-2 text-secondary animate-pulse">✨</div>
              <div className="absolute bottom-2 left-2 text-secondary animate-pulse">⭐</div>
            </div>
            
            <div className="bg-card border-2 border-primary rounded-2xl p-8 relative overflow-hidden">
              <Zap className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-3">Priority Booking Access</h3>
              <p className="text-muted-foreground mb-4">Skip the waiting list</p>
              <div className="text-3xl font-bold text-primary">Exclusive</div>
              
              {/* Lightning Effect */}
              <div className="absolute top-2 right-2 text-primary animate-bounce">⚡</div>
              <div className="absolute bottom-2 left-2 text-primary animate-bounce">🚀</div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-destructive/20 border border-destructive rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-destructive" />
              <span className="text-xl font-semibold">Offer expires in:</span>
            </div>
            
            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-destructive text-destructive-foreground rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-destructive text-destructive-foreground rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-destructive text-destructive-foreground rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
            
            <p className="text-destructive font-semibold text-lg">
              ⚠️ Once gone, this offer won't return for 6 months!
            </p>
          </div>

          {/* Urgency Elements */}
          <div className="bg-card rounded-xl p-6 mb-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-destructive">16</div>
                <div className="text-muted-foreground">Spots Remaining</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">84</div>
                <div className="text-muted-foreground">Already Claimed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-muted-foreground">People Viewing Now</div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="space-y-4">
            <button className="btn-urgent text-2xl px-12 py-6 w-full md:w-auto pulse-urgent">
              🔥 CLAIM MY EXPLOSIVE OFFER NOW! 🔥
            </button>
            
            <p className="text-sm text-muted-foreground">
              * Limited to first 100 signups only. No credit card required.
            </p>
          </div>

          {/* Social Proof Ticker */}
          <div className="mt-8 bg-secondary/20 rounded-lg p-4 overflow-hidden">
            <div className="animate-pulse text-center">
              <span className="font-semibold">⚡ LIVE:</span> Ravi from Noida just claimed spot #85!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplodingOffer;