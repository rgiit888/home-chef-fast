import { Check, X, HelpCircle } from "lucide-react";

const ComparisonTable = () => {
  const comparisons = [
    {
      feature: "Hygiene",
      traditional: {
        icon: <X className="w-5 h-5" />,
        text: "Unverified",
        color: "text-destructive",
      },
      restaurants: {
        icon: <HelpCircle className="w-5 h-5" />,
        text: "Unknown",
        color: "text-yellow-600",
      },
      qckily: {
        icon: <Check className="w-5 h-5" />,
        text: "Live Monitoring",
        color: "text-primary",
      },
    },
    {
      feature: "Cost/month",
      traditional: {
        icon: <X className="w-5 h-5" />,
        text: "₹21k+",
        color: "text-destructive",
      },
      restaurants: {
        icon: <X className="w-5 h-5" />,
        text: "₹28k+",
        color: "text-destructive",
      },
      qckily: {
        icon: <Check className="w-5 h-5" />,
        text: "₹15k",
        color: "text-primary font-bold",
      },
    },
    {
      feature: "Ingredient Qty",
      traditional: {
        icon: <X className="w-5 h-5" />,
        text: "Excess waste",
        color: "text-destructive",
      },
      restaurants: {
        icon: <X className="w-5 h-5" />,
        text: "N/A",
        color: "text-muted-foreground",
      },
      qckily: {
        icon: <Check className="w-5 h-5" />,
        text: "Zero waste",
        color: "text-primary font-bold",
      },
    },
    {
      feature: "Flexibility",
      traditional: {
        icon: <X className="w-5 h-5" />,
        text: "Fixed schedule",
        color: "text-destructive",
      },
      restaurants: {
        icon: <Check className="w-5 h-5" />,
        text: "24/7",
        color: "text-primary",
      },
      qckily: {
        icon: <Check className="w-5 h-5" />,
        text: "On-demand",
        color: "text-primary font-bold",
      },
    },
    {
      feature: "Food Quality",
      traditional: {
        icon: <HelpCircle className="w-5 h-5" />,
        text: "Inconsistent",
        color: "text-yellow-600",
      },
      restaurants: {
        icon: <Check className="w-5 h-5" />,
        text: "Good",
        color: "text-primary",
      },
      qckily: {
        icon: <Check className="w-5 h-5" />,
        text: "Restaurant-level",
        color: "text-primary font-bold",
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why <span className="text-primary">Qckily?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we stack up against traditional solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile-First Responsive Table */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-primary)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="p-6 text-left font-bold text-lg">Feature</th>
                    <th className="p-6 text-center font-bold text-lg">
                      Traditional Cook + Grocery
                    </th>
                    <th className="p-6 text-center font-bold text-lg">
                      Restaurants
                    </th>
                    <th className="p-6 text-center font-bold text-lg bg-primary/10 text-primary">
                      Qckily ⭐
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t border-border hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-6 font-semibold text-lg">
                        {item.feature}
                      </td>

                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className={item.traditional.color}>
                            {item.traditional.icon}
                          </span>
                          <span className={item.traditional.color}>
                            {item.traditional.text}
                          </span>
                        </div>
                      </td>

                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className={item.restaurants.color}>
                            {item.restaurants.icon}
                          </span>
                          <span className={item.restaurants.color}>
                            {item.restaurants.text}
                          </span>
                        </div>
                      </td>

                      <td className="p-6 text-center bg-primary/5">
                        <div className="flex items-center justify-center gap-2">
                          <span className={item.qckily.color}>
                            {item.qckily.icon}
                          </span>
                          <span className={item.qckily.color}>
                            {item.qckily.text}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card-feature text-center">
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <div className="text-muted-foreground">
                Cost Savings vs Traditional
              </div>
            </div>
            <div className="card-feature text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Hygiene Transparency</div>
            </div>
            <div className="card-feature text-center">
              <div className="text-4xl font-bold text-primary mb-2">0%</div>
              <div className="text-muted-foreground">Grocery Waste</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
