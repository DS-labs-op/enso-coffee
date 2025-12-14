import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cafe.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Enso Coffee café interior with warm lighting, wooden furniture, and espresso bar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-sm">
              <Clock className="h-3.5 w-3.5" />
              08:30 AM – 11:30 PM
            </span>
            <span className="inline-flex items-center px-3 py-1.5 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-sm">
              ₹200 – ₹400
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Enso Coffee — specialty coffee & cozy vibes in Katargam
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            Dine-in • Takeaway • Cold brews, espresso classics & desserts
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Link to="/menu">
              <Button variant="hero" size="xl">
                View Menu
              </Button>
            </Link>
            <a href="tel:+918128955751">
              <Button variant="hero-outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="h-5 w-5" />
                Call to Order
              </Button>
            </a>
            <a
              href="https://maps.google.com/?q=Enso+Coffee+Katargam+Surat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10">
                <MapPin className="h-5 w-5" />
                Get Directions
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
