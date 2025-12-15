import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Instagram, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    visitDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "918155033301"; // Cafe WhatsApp number (no +, no spaces)

    const message = `
Hello Enso Coffee 👋

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Visit Date: ${formData.visitDate || "Not specified"}

Message:
${formData.message}
    `;

    const whatsappURL =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Redirect (reliable, not blocked)
    window.location.href = whatsappURL;
  };

  return (
    <>
      <Helmet>
        <title>Contact | Enso Coffee - Get in Touch</title>
        <meta
          name="description"
          content="Contact Enso Coffee in Katargam, Surat. Call us, send a message via WhatsApp, or visit us at Sunday Hub."
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground">
              Have a question or want to plan a visit? Message us on WhatsApp.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg shadow-black/10">
              <h2 className="font-serif text-2xl font-bold mb-6">
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
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="visitDate">Planning to visit?</Label>
                  <Input
                    id="visitDate"
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        visitDate: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:+918155033301"
                  className="bg-card p-5 rounded-xl shadow-lg shadow-black/10"
                >
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs uppercase text-muted-foreground">
                        Phone
                      </p>
                      <p className="font-semibold">+91 8155033301</p>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:hello@enso.coffee"
                  className="bg-card p-5 rounded-xl shadow-lg shadow-black/10"
                >
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs uppercase text-muted-foreground">
                        Email
                      </p>
                      <p className="font-semibold">hello@enso.coffee</p>
                    </div>
                  </div>
                </a>

                <div className="bg-card p-5 rounded-xl shadow-lg shadow-black/10">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs uppercase text-muted-foreground">
                        Address
                      </p>
                      <p className="font-semibold text-sm">
                        301, Sunday Hub, near Ankur School, Katargam, Surat 395004
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-5 rounded-xl shadow-lg shadow-black/10">
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs uppercase text-muted-foreground">
                        Hours
                      </p>
                      <p className="font-semibold">
                        Daily: 8:30 AM – 11:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://www.instagram.com/enso_coffee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg shadow-lg"
                >
                  <Instagram className="h-5 w-5 text-accent" />
                  <span className="font-medium">@enso_coffee</span>
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
