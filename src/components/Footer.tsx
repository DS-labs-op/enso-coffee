import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Enso Coffee</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Specialty coffee & cozy vibes in Katargam. Crafted brews, seasonal desserts, 
              and space to relax or work.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/enso_coffee/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/menu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Menu
              </Link>
              <Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Gallery
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+918128955751" className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+91 81289 55751</span>
              </a>
              <a href="mailto:hello@enso.coffee" className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>hello@enso.coffee</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>301, Sunday Hub, near Ankur School, Katargam, Surat, Gujarat 395004</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Hours</h4>
            <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-primary-foreground">Daily</p>
                <p>08:30 AM – 11:30 PM</p>
                <p className="text-xs mt-1 italic">Hours may vary; check Instagram or call</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Enso Coffee. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
