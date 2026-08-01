import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title:
    "MLBUILDS Carpentry | Red Seal Carpenter | Decks, Garages & Renovations in Ottawa",

  description:
    "MLBUILDS Carpentry is a Red Seal Carpenter serving Ottawa, Orleans, Clarence-Rockland, Russell, Embrun and surrounding areas. We specialize in custom decks, garages, framing, renovations, exterior carpentry and interior finishing.",

  keywords: [
    "Ottawa Carpenter",
    "Red Seal Carpenter",
    "Deck Builder Ottawa",
    "Custom Decks Ottawa",
    "Garage Builder Ottawa",
    "Framing Contractor Ottawa",
    "Renovation Contractor Ottawa",
    "Exterior Carpentry Ottawa",
    "Interior Finishing Ottawa",
    "Pergolas Ottawa",
    "Fence Builder Ottawa",
  ],

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
