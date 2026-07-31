import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "MLBUILDS Carpentry | Ottawa Custom Carpentry",
  description:
    "Custom decks, renovations, framing and exterior carpentry serving Ottawa and surrounding areas.",
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
