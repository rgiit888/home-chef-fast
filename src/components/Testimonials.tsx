import { scrollToSignup } from "@/lib/utils";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya T.",
      location: "Delhi Mom",
      avatar: "👩‍💼",
      quote: "My kids love the variety and I love the peace of mind.",
      rating: 5,
      highlight: "₹6500 saved",
    },
    {
      name: "Rajiv K.",
      location: "56, Bengaluru",
      avatar: "👨‍💼",
      quote:
        "Diabetic-friendly meals cooked while I monitored - finally I can trust my food! The chef customizes everything based on my dietary restrictions.",
      rating: 5,
      highlight: "Diabetic-friendly",
    },
    {
      name: "Anita S.",
      location: "Gurgaon Family",
      avatar: "👩‍🍳",
      quote:
        "Working couple with two kids - Qckily is a lifesaver! Restaurant quality food without the hassle of going out or unreliable delivery.",
      rating: 5,
      highlight: "Working couple",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Real Stories from{" "}
            <span className="text-primary">Real Families</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 100+ of satisfied families across Delhi/NCR who've transformed
            their dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-testimonial hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 text-primary/20 w-8 h-8" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
                {testimonial.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Meals Cooked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join the Qckily Family Today!
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the convenience and quality that thousands of families
              already love
            </p>
            <button
              onClick={scrollToSignup}
              style={{ color: "green" }}
              className="btn-hero"
            >
              Get Started Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
