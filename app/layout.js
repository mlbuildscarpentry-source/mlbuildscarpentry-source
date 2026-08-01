import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "MLBUILDS Carpentry | Deck Builder, Garages & Renovations Ottawa",

  description:
    "MLBUILDS Carpentry provides custom decks, garages, framing, renovations, siding, fences, and interior finishing in Ottawa and surrounding areas. Red Seal Carpenter. Fully insured. Free estimates.",

  keywords: [
    "Ottawa carpenter",
    "Deck builder Ottawa",
    "Garage builder Ottawa",
    "Custom decks Ottawa",
    "Renovations Ottawa",
    "Framing contractor Ottawa",
    "Exterior carpentry Ottawa",
    "Interior finishing Ottawa",
    "Fence builder Ottawa",
    "Pergola builder Ottawa",
    "MLBUILDS"
  ],

  authors: [{ name: "MLBUILDS Carpentry" }],

  openGraph: {
    title: "MLBUILDS Carpentry",
    description:
      "Quality craftsmanship that speaks for itself.",
    url: "https://mlbuildscarpentry.ca",
    siteName: "MLBUILDS Carpentry",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  icons: {
    icon: "/icon.png",
  },
};

  verification: {
    google: "HgxnCxDEBu1wLgAlhIl1kzQ0t2Ve0fRrqrAgyfCknMc",
  },

  openGraph: {
    title:
      "MLBUILDS Carpentry | Red Seal Carpenter | Ottawa",
    description:
      "Custom decks, garages, renovations, framing, exterior carpentry and interior finishing throughout Ottawa and surrounding areas.",
    url: "https://mlbuildscarpentry.ca",
    siteName: "MLBUILDS Carpentry",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
