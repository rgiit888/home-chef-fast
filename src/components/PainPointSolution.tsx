import { CheckCircle, XCircle } from "lucide-react";

const PainPointSolution = () => {
  const painPoints = [
    "Unreliable cooks ghosting you",
    "Grocery waste piling up", 
    "Doubting restaurant hygiene",
    "Monthly costs exceeding ₹5k"
  ];

  const solutions = [
    "Chefs background-checked & hygiene-certified",
    "Exact ingredients delivered with chef",
    "Live cooking transparency", 
    "Save ₹5000+/month vs. cook+groceries"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Pain Points */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
                Tired of this? 😤
              </h2>
            </div>
            
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg hover:bg-destructive/15 transition-colors"
                >
                  <XCircle className="text-destructive w-6 h-6 flex-shrink-0" />
                  <span className="text-lg font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                We fixed it! ✨
              </h2>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/15 transition-colors hover:scale-[1.02] duration-300"
                >
                  <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                  <span className="text-lg font-medium">{solution}</span>
                </div>
              ))}
            </div>
            
            {/* Highlight Savings */}
            <div className="bg-secondary/20 border border-secondary rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">₹5000+ Saved Monthly!</div>
              <div className="text-muted-foreground">vs. traditional cook + grocery costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSolution;