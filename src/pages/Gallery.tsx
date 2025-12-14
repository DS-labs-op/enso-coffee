import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";
import coldBrewImage from "@/assets/cold-brew.jpg";
import affogatoImage from "@/assets/affogato.jpg";
import cheesecakeImage from "@/assets/cheesecake.jpg";
import vietnameseImage from "@/assets/vietnamese-coffee.jpg";
import baristaImage from "@/assets/barista.jpg";
import interiorImage from "@/assets/cafe-interior.jpg";

const galleryImages = [
  { src: heroImage, alt: "Enso Coffee café interior with espresso bar and cozy seating", category: "Interior" },
  { src: coldBrewImage, alt: "Signature cold brew coffee with ice", category: "Drinks" },
  { src: baristaImage, alt: "Barista crafting latte art at the espresso machine", category: "Behind the Scenes" },
  { src: affogatoImage, alt: "Classic affogato with espresso and vanilla ice cream", category: "Desserts" },
  { src: interiorImage, alt: "Cozy corner with comfortable seating and plants", category: "Interior" },
  { src: cheesecakeImage, alt: "New York style cheesecake with berry compote", category: "Desserts" },
  { src: vietnameseImage, alt: "Traditional Vietnamese iced coffee", category: "Drinks" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <>
      <Helmet>
        <title>Gallery | Enso Coffee - Photos of Our Café</title>
        <meta
          name="description"
          content="Browse photos of Enso Coffee's cozy interior, specialty drinks, and delicious desserts. Located in Katargam, Surat."
        />
      </Helmet>

      <Header />
      <main className="pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 pt-8">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Gallery
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-4">
              Our Space & Creations
            </h1>
            <p className="text-muted-foreground">
              Take a visual tour of Enso Coffee—from our cozy interiors to our 
              carefully crafted drinks and desserts.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div className={`aspect-square ${index === 0 ? "md:aspect-auto md:h-full" : ""}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary-foreground text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              See more on our Instagram
            </p>
            <a
              href="https://www.instagram.com/enso_coffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-medium transition-colors"
            >
              @enso_coffee →
            </a>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6 text-primary-foreground" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground text-sm bg-foreground/50 px-4 py-2 rounded-full">
              {selectedImage.alt}
            </p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
