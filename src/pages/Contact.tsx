import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    visitDate: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you soon. Thanks for reaching out!",
    });

    setFormData({ name: "", phone: "", email: "", message: "", visitDate: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Enso Coffee - Get in Touch</title>
        <meta
          name="description"
          content="Contact Enso Coffee in Katargam, Surat. Call us, send a message, or visit us at Sunday Hub. Open daily 8:30 AM – 11:30 PM."
        />
      </Helmet>

      <Header />

      <main className="pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 pt-8">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground">
              Have a question, feedback, or just want to say hi? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg shadow-black/10">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="visitDate">Planning to visit?</Label>
                  <Input
                    id="visitDate"
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-10">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Phone */}
                <a
                  href="tel:+918128955751"
                  className="bg-card p-5 rounded-xl shadow-lg shadow-black/10 hover:shadow-xl transition-shadow group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Phone</p>
                      <p className="font-semibold">+91 81289 55751</p>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@enso.coffee"
                  className="bg-card p-5 rounded-xl shadow-lg shadow-black/10 hover:shadow-xl transition-shadow group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Email</p>
                      <p className="font-semibold">hello@enso.coffee</p>
                    </div>
                  </div>
                </a>

                {/* Address */}
                <div className="bg-card p-5 rounded-xl shadow-lg shadow-black/10 mt-2 md:mt-3">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Address</p>
                      <p className="font-semibold text-sm">
                        301, Sunday Hub, near Ankur School, Katargam, Surat 395004
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-card p-5 rounded-xl shadow-lg shadow-black/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Hours</p>
                      <p className="font-semibold">Daily: 8:30 AM – 11:30 PM</p>
                      <p className="text-xs text-muted-foreground italic">
                        May vary; check Instagram
                      </p>
                    </div>
                  </div>
                </div>
              </div>

{/* Social */}
<div className="flex flex-wrap justify-center gap-4 mb-4">
  <a
    href="https://www.instagram.com/enso_coffee/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg shadow-lg shadow-black/10 hover:shadow-xl transition-all hover:-translate-y-0.5"
  >
    <Instagram className="h-5 w-5 text-accent" />
    <span className="font-medium">@enso_coffee</span>
  </a>

  <a
    href="https://www.facebook.com/ensocoffee"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg shadow-lg shadow-black/10 hover:shadow-xl transition-all hover:-translate-y-0.5"
  >
    <Facebook className="h-5 w-5 text-accent" />
    <span className="font-medium">Facebook</span>
  </a>
</div>


              <a
                href="https://maps.google.com/?q=Enso+Coffee+Katargam+Surat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  <MapPin className="h-4 w-4" />
                  Get Directions on Google Maps
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
