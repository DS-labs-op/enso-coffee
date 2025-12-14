import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const Location = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Visit Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                Find Us in Katargam
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of Katargam, Enso Coffee is your neighborhood 
                spot for specialty coffee and good vibes. Easy to find, impossible to forget.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    301, Sunday Hub, near Ankur School,<br />
                    Katargam, Surat, Gujarat 395004
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Daily: 08:30 AM – 11:30 PM<br />
                    <span className="italic text-xs">Hours may vary; check Instagram or call</span>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a 
                    href="tel:+918128955751" 
                    className="text-muted-foreground text-sm hover:text-accent transition-colors"
                  >
                    +91 81289 55751
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Enso+Coffee+Katargam+Surat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                <Navigation className="h-4 w-4" />
                Get Directions
              </Button>
            </a>
          </div>

          {/* Map */}
          <div className="relative h-80 lg:h-auto min-h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8576!2d72.8234!3d21.2125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEnso%20Coffee!5e0!3m2!1sen!2sin!4v1702561234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Enso Coffee location on Google Maps"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
