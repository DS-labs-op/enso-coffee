import baristaImage from "@/assets/barista.jpg";
import interiorImage from "@/assets/cafe-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={baristaImage}
                  alt="Barista crafting latte art at Enso Coffee"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={interiorImage}
                  alt="Cozy interior corner at Enso Coffee with comfortable seating and plants"
                  className="w-full h-72 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Crafted with care, served with soul
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Enso Coffee, we craft specialty coffee with locally sourced beans, 
                barista care, and desserts designed to pair perfectly with every cup. 
                Our space is designed for moments of peace—whether you're catching up 
                with friends, working on your next big idea, or simply enjoying a quiet 
                moment with a great brew.
              </p>
              <p>
                Drop by for our signature <strong className="text-foreground">Cold Brew Barrel</strong>, 
                indulge in a traditional <strong className="text-foreground">Vietnamese Coffee</strong>, 
                or treat yourself to an <strong className="text-foreground">Affogato</strong> paired 
                with our homemade <strong className="text-foreground">Cheesecake</strong>.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Specialty Coffee", value: "Single Origin" },
                { label: "Fresh Daily", value: "Baked In-House" },
                { label: "Atmosphere", value: "Work-Friendly" },
                { label: "Experience", value: "Since 2020" },
              ].map((feature) => (
                <div key={feature.label} className="bg-card p-4 rounded-lg">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{feature.label}</p>
                  <p className="font-semibold text-foreground">{feature.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
