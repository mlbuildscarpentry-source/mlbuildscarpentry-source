import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "MLBUILDS Carpentry | Ottawa Decks, Garages & Renovations",
  description:
    "Red Seal Carpenter serving Ottawa and surrounding areas. Custom decks, garages, renovations, framing, exterior carpentry and interior finishing.",

  verification: {
    google: "HgxnCxDEBu1wLgAlhIl1kzQ0t2Ve0fRrqrAgyfCknMc",
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
