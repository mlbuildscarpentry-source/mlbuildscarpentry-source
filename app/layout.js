import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  metadataBase: new URL("https://mlbuildscarpentry.ca"),

  title: {
    default: "MLBUILDS Carpentry | Deck Builder & Renovation Contractor Ottawa",
    template: "%s | MLBUILDS Carpentry",
  },

  description:
    "MLBUILDS Carpentry is a Red Seal carpentry company serving Ottawa and surrounding areas. We specialize in custom decks, garages, framing, renovations, fences, pergolas, siding, exterior carpentry and interior finishing. Fully insured. Free estimates.",

  keywords: [
    "Ottawa carpenter",
    "Deck builder Ottawa",
    "Deck contractor Ottawa",
    "Garage builder Ottawa",
    "Framing contractor Ottawa",
    "Custom decks Ottawa",
    "Composite decks Ottawa",
    "Pressure treated decks Ottawa",
    "Cedar decks Ottawa",
    "Renovations Ottawa",
    "Interior finishing Ottawa",
    "Exterior carpentry Ottawa",
    "Fence builder Ottawa",
    "Pergola builder Ottawa",
    "Red Seal Carpenter",
    "MLBUILDS Carpentry",
  ],

  authors: [
    {
      name: "MLBUILDS Carpentry",
    },
  ],

  creator: "MLBUILDS Carpentry",

  publisher: "MLBUILDS Carpentry",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "HgxnCxDEBu1wLgAlhIl1kzQ0t2Ve0fRrqrAgyfCknMc",
  },

  openGraph: {
    title:
      "MLBUILDS Carpentry | Deck Builder & Renovation Contractor Ottawa",

    description:
      "Quality craftsmanship that speaks for itself. Custom decks, garages, framing, renovations and interior finishing throughout Ottawa and surrounding areas.",

    url: "https://mlbuildscarpentry.ca",

    siteName: "MLBUILDS Carpentry",

    locale: "en_CA",

    type: "website",

    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "MLBUILDS Carpentry",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "MLBUILDS Carpentry",

    description:
      "Quality craftsmanship that speaks for itself.",

    images: ["/images/hero.jpg"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",

    name: "MLBUILDS Carpentry",

    image: "https://mlbuildscarpentry.ca/images/hero.jpg",

    logo: "https://mlbuildscarpentry.ca/icon.png",

    url: "https://mlbuildscarpentry.ca",

    telephone: "+1-819-209-2541",

    email: "mlbuildscarpentry@gmail.com",

    priceRange: "$$",

    description:
      "MLBUILDS Carpentry specializes in custom decks, garages, framing, renovations, fences, pergolas, siding, exterior carpentry and interior finishing throughout Ottawa and surrounding areas.",

    slogan: "Quality craftsmanship that speaks for itself.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Ottawa",
      addressRegion: "Ontario",
      addressCountry: "Canada",
    },

    areaServed: [
      "Ottawa",
      "Orleans",
      "Clarence-Rockland",
      "Russell",
      "Embrun",
      "Limoges",
      "Casselman",
      "Greely",
      "Cumberland",
      "Kanata",
      "Nepean",
      "Stittsville",
    ],

    sameAs: [
      "https://www.facebook.com/profile.php?id=61572682347568",
      "https://www.instagram.com/mlbuildscarpentry",
      "https://g.page/r/CTPxY7iRNEeREBM/review",
    ],
  };

  return (
    <html lang="en-CA">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <Navbar />

        {children}
      </body>
    </html>
  );
}
