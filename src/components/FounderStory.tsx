const FounderStory = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              From <span className="text-primary">IIT</span> to Your <span className="text-secondary">Home Kitchen</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg leading-relaxed">
                As <span className="font-semibold text-primary">IIT Bombay/Delhi alumni</span>, we survived years of questionable restaurant food and unreliable home cooks. We knew there had to be a better way.
              </p>
              
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-secondary">Qckily is our mission</span> to revolutionize Indian home dining - making it seamless and hyper-convenient to eat healthy, restaurant-quality food without the hassle.
              </p>
              
              <p className="text-lg leading-relaxed">
                We're not just building a food service. We're creating a <span className="font-semibold text-primary">trust ecosystem</span> where technology meets tradition, bringing professional chefs directly to your kitchen.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Our Promise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✨ Transparency in every ingredient</li>
                  <li>🎯 Technology-enabled convenience</li>
                  <li>🏠 Respect for your home and privacy</li>
                  <li>💚 Sustainable, zero-waste cooking</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Timeline */}
              <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)]">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Journey</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <div className="font-semibold">Problem Recognition</div>
                      <div className="text-sm text-muted-foreground">Identified gaps in home dining solutions during our college years</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <div className="font-semibold">Research & Development</div>
                      <div className="text-sm text-muted-foreground">2+ years studying Indian food habits and chef training</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <div className="font-semibold">Qckily Launch</div>
                      <div className="text-sm text-muted-foreground">Bringing restaurant-quality cooking to your kitchen</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Certified Chefs</div>
                </div>
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Partner Restaurants</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;