import heroImage from "@/assets/hero-split-screen.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('emergency-signup');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Chef cooking vs home cooking comparison" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Restaurant-Quality Meals
            <br />
            <span className="text-secondary">Cooked in YOUR Kitchen</span>
            <br />
            <span className="text-primary-light">Ready in 30 Minutes!</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Skip takeout containers & unreliable cooks. Our chefs arrive at your door with fresh ingredients and cook your ordered meal on the spot!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToSignup}
              className="btn-hero text-xl px-10 py-6 hover:scale-110 transition-transform duration-300"
            >
              Join Our Closed Community →
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-secondary">100+</div>
              <div className="text-sm text-gray-300">Chef-Curated Dishes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-secondary">30 min</div>
              <div className="text-sm text-gray-300">Order to First Bite</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-secondary">₹5000+</div>
              <div className="text-sm text-gray-300">Monthly Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-secondary">Zero</div>
              <div className="text-sm text-gray-300">Food Waste</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;