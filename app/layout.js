import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "MLBUILDS Carpentry | Deck Builder, Garages & Renovations Ottawa",

  description:
    "MLBUILDS Carpentry provides custom decks, garages, framing, renovations, fences, pergolas, siding, exterior carpentry and interior finishing throughout Ottawa and surrounding areas. Red Seal Carpenter. Fully insured. Free estimates.",

  keywords: [
    "Ottawa carpenter",
    "Deck builder Ottawa",
    "Custom decks Ottawa",
    "Composite decks Ottawa",
    "Pressure treated decks Ottawa",
    "Cedar decks Ottawa",
    "Garage builder Ottawa",
    "Garage framing Ottawa",
    "Framing contractor Ottawa",
    "Home renovations Ottawa",
    "Interior finishing Ottawa",
    "Exterior carpentry Ottawa",
    "Fence builder Ottawa",
    "Pergola builder Ottawa",
    "Red Seal Carpenter",
    "MLBUILDS Carpentry"
  ],

  authors: [
    {
      name: "MLBUILDS Carpentry",
    },
  ],

  creator: "MLBUILDS Carpentry",

  publisher: "MLBUILDS Carpentry",

  verification: {
    google: "HgxnCxDEBu1wLgAlhIl1kzQ0t2Ve0fRrqrAgyfCknMc",
  },

  openGraph: {
    title: "MLBUILDS Carpentry | Red Seal Carpenter | Ottawa",

    description:
      "Quality craftsmanship that speaks for itself. Custom decks, garages, renovations, framing, exterior carpentry and interior finishing throughout Ottawa and surrounding areas.",

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
  return (
    <html lang="en-CA">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
