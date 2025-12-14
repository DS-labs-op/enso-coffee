import { Instagram } from "lucide-react";
import coldBrewImage from "@/assets/cold-brew.jpg";
import affogatoImage from "@/assets/affogato.jpg";
import cheesecakeImage from "@/assets/cheesecake.jpg";
import vietnameseImage from "@/assets/vietnamese-coffee.jpg";
import baristaImage from "@/assets/barista.jpg";
import interiorImage from "@/assets/cafe-interior.jpg";

const instagramPosts = [
  { image: coldBrewImage, alt: "Cold brew coffee at Enso Coffee" },
  { image: baristaImage, alt: "Barista crafting latte art" },
  { image: cheesecakeImage, alt: "Fresh cheesecake slice" },
  { image: interiorImage, alt: "Cozy café interior" },
  { image: affogatoImage, alt: "Delicious affogato dessert" },
  { image: vietnameseImage, alt: "Traditional Vietnamese coffee" },
];

const InstagramFeed = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <a
            href="https://www.instagram.com/enso_coffee/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-4"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-medium">@enso_coffee</span>
          </a>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground">
            Tag us in your photos with #EnsoCoffee for a chance to be featured
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/enso_coffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
