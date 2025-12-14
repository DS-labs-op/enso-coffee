import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedMenu from "@/components/FeaturedMenu";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Enso Coffee",
    image: ["https://enso.coffee/hero-cafe.jpg"],
    telephone: "+91 81289 55751",
    email: "hello@enso.coffee",
    address: {
      "@type": "PostalAddress",
      streetAddress: "301, Sunday Hub, near Ankur School",
      addressLocality: "Katargam, Surat",
      addressRegion: "Gujarat",
      postalCode: "395004",
      addressCountry: "IN",
    },
    url: "https://enso.coffee",
    openingHours: ["Mo-Su 08:30-23:30"],
    priceRange: "₹200-₹400",
    servesCuisine: ["Coffee", "Desserts", "Café"],
    acceptsReservations: "No",
  };

  return (
    <>
      <Helmet>
        <title>Enso Coffee | Specialty Coffee & Café in Katargam, Surat</title>
        <meta
          name="description"
          content="Enso Coffee — specialty coffee & cozy vibes in Katargam, Surat. Enjoy cold brews, espresso classics, desserts & more. Open daily 8:30 AM – 11:30 PM."
        />
        <meta
          name="keywords"
          content="Enso Coffee, specialty coffee Surat, café Katargam, cold brew, Vietnamese coffee, cheesecake, coffee shop Surat"
        />
        <link rel="canonical" href="https://enso.coffee" />
        <meta property="og:title" content="Enso Coffee | Specialty Coffee in Katargam, Surat" />
        <meta
          property="og:description"
          content="Crafted brews, seasonal desserts, and space to relax or work. Visit Enso Coffee in Katargam, Surat."
        />
        <meta property="og:type" content="restaurant.cafe" />
        <meta property="og:url" content="https://enso.coffee" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedMenu />
        <Reviews />
        <Location />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
};

export default Index;
