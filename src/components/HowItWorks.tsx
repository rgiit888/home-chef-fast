import chefArrival from "@/assets/chef-arrival.jpg";
import familyDining from "@/assets/family-dining.jpg";
import { scrollToSignup } from "@/lib/utils";
import { Smartphone, ShoppingCart, ChefHat, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Browse",
      description: "Choose from 100+ chef-curated dishes",
      detail: "Zomato-style UI with detailed recipes and nutritional info",
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Order",
      description: "Chef dispatched in under 10 mins",
      detail: "Real-time tracking from kitchen to your doorstep",
    },
    {
      icon: <ChefHat className="w-12 h-12" />,
      title: "Cook",
      description: "No groceries needed - we bring everything!",
      detail: "Professional chef with fresh ingredients and equipment",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Enjoy",
      description: "30 mins from order to first bite!",
      detail: "Restaurant-quality meal in your own home",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From craving to satisfaction in just 4 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="card-feature text-center group">
              {/* Step Number */}
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 mx-auto">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-lg font-medium text-primary mb-2">
                {step.description}
              </p>
              <p className="text-sm text-muted-foreground">{step.detail}</p>
            </div>
          ))}
        </div>

        {/* Visual Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src={chefArrival}
              alt="Professional chef arriving with ingredients"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Chef Arrives</h3>
              <p className="text-lg">
                Fresh ingredients, professional equipment, certified hygiene
                standards
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src={familyDining}
              alt="Family enjoying meal together"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">#qckilymoment</h3>
              <p className="text-lg">
                Restaurant-quality dining experience in your own home
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience Qckily?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join 100+ of families already enjoying stress-free,
              restaurant-quality meals at home
            </p>
            <button
              onClick={scrollToSignup}
              style={{ color: "green" }}
              className="btn-hero"
            >
              Start Your Food Journey →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
