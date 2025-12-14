import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import coldBrewImage from "@/assets/cold-brew.jpg";
import affogatoImage from "@/assets/affogato.jpg";
import cheesecakeImage from "@/assets/cheesecake.jpg";
import vietnameseImage from "@/assets/vietnamese-coffee.jpg";

const featuredItems = [
  {
    name: "Cold Brew Barrel",
    category: "Signature Drink",
    description: "Smooth, rich cold brew aged to perfection",
    price: "₹220",
    image: coldBrewImage,
  },
  {
    name: "Vietnamese Coffee",
    category: "Iced Coffee",
    description: "Traditional phin-dripped coffee with condensed milk",
    price: "₹180",
    image: vietnameseImage,
  },
  {
    name: "Classic Affogato",
    category: "Dessert",
    description: "Vanilla gelato drowned in hot espresso",
    price: "₹200",
    image: affogatoImage,
  },
  {
    name: "Berry Cheesecake",
    category: "Baked Goods",
    description: "New York style with seasonal berry compote",
    price: "₹250",
    image: cheesecakeImage,
  },
];

const FeaturedMenu = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Customer Favorites
          </h2>
          <p className="text-muted-foreground">
            Discover what our guests love most—from our signature cold brews to 
            indulgent desserts that pair perfectly with every cup.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredItems.map((item, index) => (
            <div
              key={item.name}
              className="group bg-background rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.description}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-accent font-bold">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/menu">
            <Button variant="hero" size="lg">
              View Full Menu
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
