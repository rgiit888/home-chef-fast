import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What if your cook does not come?",
      answer: "हम आपके साथ हैं! If our chef doesn't arrive within the promised time, you get immediate priority rebooking + 50% discount on your next order. We also have backup chefs in every zone to ensure 99.9% reliability."
    },
    {
      question: "How do you source your ingredients?",
      answer: "We visit local mandis at 4AM daily to hand-pick the freshest ingredients. All vegetables and proteins are lab-tested for pesticides and quality. We maintain cold-chain delivery to ensure freshness from source to your kitchen."
    },
    {
      question: "What utensils do I need to provide?",
      answer: "You only need basic utensils - stove, kadhai/pan, and traditional Indian cookware. Our chefs bring specialized tools, spices, and any unique equipment needed for specific dishes. Your kitchen, our expertise!"
    },
    {
      question: "Is this service available in my area?",
      answer: "Currently serving Delhi, Noida, Gurgaon, and select areas of NCR. Enter your pincode on our website for instant availability check. We're expanding to Bengaluru and Mumbai in Q2 2024!"
    },
    {
      question: "How do you ensure hygiene and safety?",
      answer: "All chefs undergo mandatory health checkups, hygiene certification, and background verification. They use sanitized equipment, wear masks and gloves, and follow strict cleanliness protocols. You can monitor the entire cooking process."
    },
    {
      question: "What about dietary restrictions and allergies?",
      answer: "Absolutely! Our chefs are trained to handle diabetic-friendly, gluten-free, vegan, Jain, and other dietary requirements. Just specify your needs while ordering, and we'll customize accordingly."
    },
    {
      question: "How much advance notice do you need?",
      answer: "For regular meals: 2-3 hours advance booking. For special occasions or complex dishes: 24 hours notice. Emergency orders (within 1 hour) available with ₹100 express fee."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Free cancellation up to 1 hour before chef arrival. 50% charge for cancellations within 1 hour (as chef is already dispatched). Zero penalty for emergencies or genuine reasons."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Frequently Asked</span> <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common concerns from Indian families
            </p>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 mb-4 hover:shadow-[var(--shadow-soft)] transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Still Have Questions CTA */}
          <div className="text-center mt-16">
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is available 24/7 to help you make the right choice
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-secondary">
                  📞 Call Us: +91-9876543210
                </button>
                <button className="btn-secondary">
                  💬 WhatsApp Support
                </button>
              </div>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="font-semibold mb-2">100% Safe</h4>
              <p className="text-sm text-muted-foreground">Background-verified chefs with insurance coverage</p>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-semibold mb-2">Money-Back Guarantee</h4>
              <p className="text-sm text-muted-foreground">200% refund if you're not completely satisfied</p>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">Instant Support</h4>
              <p className="text-sm text-muted-foreground">24/7 customer care with 2-minute response time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;