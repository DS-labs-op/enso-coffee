import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuCategories = [
  {
    id: "hot-coffee",
    name: "Hot Coffee",
    items: [
      { name: "Espresso", description: "Double shot, bold and rich", price: "₹120" },
      { name: "Americano", description: "Espresso with hot water", price: "₹140" },
      { name: "Cappuccino", description: "Espresso, steamed milk, foam", price: "₹160" },
      { name: "Latte", description: "Espresso with steamed milk", price: "₹170" },
      { name: "Flat White", description: "Velvety microfoam, double shot", price: "₹180" },
      { name: "Mocha", description: "Espresso, chocolate, steamed milk", price: "₹190" },
    ],
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee & Tonics",
    items: [
      { name: "Cold Brew Barrel", description: "Signature smooth cold brew, aged 24h", price: "₹220", featured: true },
      { name: "Iced Americano", description: "Espresso over ice", price: "₹150" },
      { name: "Iced Latte", description: "Espresso, cold milk, ice", price: "₹180" },
      { name: "Vietnamese Coffee", description: "Phin-dripped with condensed milk", price: "₹180", featured: true },
      { name: "Espresso Tonic", description: "Espresso, tonic water, citrus", price: "₹200" },
      { name: "Cold Brew Float", description: "Cold brew with vanilla ice cream", price: "₹250" },
    ],
  },
  {
    id: "signature",
    name: "Signature Drinks",
    items: [
      { name: "Enso Sunrise", description: "Orange, espresso, sparkling water", price: "₹220" },
      { name: "Salted Caramel Latte", description: "House-made caramel, sea salt flakes", price: "₹200" },
      { name: "Lavender Honey Latte", description: "Floral notes, local honey", price: "₹210" },
      { name: "Matcha Latte", description: "Ceremonial grade matcha, oat milk", price: "₹190" },
      { name: "Turmeric Golden Milk", description: "Warming spices, coconut milk", price: "₹170" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts & Bakes",
    items: [
      { name: "Classic Affogato", description: "Vanilla gelato drowned in espresso", price: "₹200", featured: true },
      { name: "Berry Cheesecake", description: "NY style, seasonal berry compote", price: "₹250", featured: true },
      { name: "Tiramisu", description: "Coffee-soaked ladyfingers, mascarpone", price: "₹230" },
      { name: "Chocolate Brownie", description: "Warm, fudgy, served with ice cream", price: "₹180" },
      { name: "Croissant", description: "Buttery, flaky, baked fresh", price: "₹120" },
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    items: [
      { name: "Avocado Toast", description: "Sourdough, smashed avo, poached egg", price: "₹220" },
      { name: "Classic Bagel", description: "Cream cheese, choice of toppings", price: "₹160" },
      { name: "Grilled Sandwich", description: "Choice of fillings, served with fries", price: "₹180" },
      { name: "Nachos", description: "Loaded with cheese, jalapeños, salsa", price: "₹200" },
      { name: "Hummus Platter", description: "With pita chips and veggie sticks", price: "₹170" },
    ],
  },
];

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu | Enso Coffee - Specialty Coffee & Desserts</title>
        <meta
          name="description"
          content="Explore our menu of specialty coffees, cold brews, signature drinks, desserts and snacks at Enso Coffee, Katargam, Surat."
        />
      </Helmet>

      <Header />

      <main className="pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div
            data-aos="fade-up"
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16 pt-8"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Menu
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-4">
              Crafted with Care
            </h1>
            <p className="text-muted-foreground mb-8">
              From single-origin espressos to signature cold brews, every cup is made with
              passion. Pair with our freshly baked goods for the perfect experience.
            </p>
            <Button variant="outline" asChild>
              <a href="/menu.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                View Full Menu (PDF)
              </a>
            </Button>
          </div>

          {/* Menu Tabs */}
          <div data-aos="fade-up" data-aos-delay="40">
            <Tabs defaultValue="hot-coffee" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
                {menuCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {menuCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {category.items.map((item, index) => (
                      <div
                        key={item.name}
                        data-aos="fade-up"
                        data-aos-delay={index * 20}
                        className={`p-5 rounded-xl transition-all ${
                          item.featured
                            ? "bg-accent/10 border border-accent/20"
                            : "bg-card"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-serif text-lg font-semibold text-foreground flex items-center gap-2">
                              {item.name}
                              {item.featured && (
                                <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                                  Popular
                                </span>
                              )}
                            </h3>
                          </div>
                          <span className="text-accent font-bold">{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Note */}
          <p
            data-aos="fade-up"
            data-aos-delay="60"
            className="text-center text-sm text-muted-foreground mt-12"
          >
            Prices are inclusive of taxes. Menu items and prices subject to change.
            Please inform us of any allergies.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Menu;