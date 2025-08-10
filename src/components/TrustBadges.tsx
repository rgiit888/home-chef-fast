import { Shield, Award, CreditCard, Users, Clock, Heart } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "FSSAI Certified",
      description: "Food Safety & Standards Authority of India",
      verified: true,
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "ISO 22000",
      description: "International Food Safety Management",
      verified: true,
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Razorpay Secured",
      description: "PCI-DSS Compliant Payment Gateway",
      verified: true,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Background Verified",
      description: "All chefs undergo thorough screening",
      verified: true,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
      verified: true,
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Satisfaction Guarantee",
      description: "100% money-back promise",
      verified: true,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-primary">100+ families</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your safety and satisfaction are our top priorities. Here's how we
            ensure the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {badge.icon}
              </div>

              <h3 className="font-semibold text-sm mb-2">{badge.title}</h3>
              <p className="text-xs text-muted-foreground leading-tight">
                {badge.description}
              </p>

              {badge.verified && (
                <div className="mt-3 flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs text-primary font-medium">
                    Verified
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-card rounded-lg p-6">
            <div className="text-2xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Happy Families</div>
          </div>
          <div className="text-center bg-card rounded-lg p-6">
            <div className="text-2xl font-bold text-secondary mb-2">4.9★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center bg-card rounded-lg p-6">
            <div className="text-2xl font-bold text-primary mb-2">98.2%</div>
            <div className="text-sm text-muted-foreground">
              Reliability Score
            </div>
          </div>
        </div>

        {/* Security Message */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className="font-semibold mb-2">🔒 Your Data is Safe</h3>
            <p className="text-sm text-muted-foreground">
              We use bank-grade encryption to protect your personal information
              and never share your data with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
