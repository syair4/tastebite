import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const restaurantStructuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "TasteBite",
  url: "https://tastebite-tau.vercel.app",
  telephone: "+1-555-123-456",
  email: "hello@tastebite.example",
  servesCuisine: ["Pizza", "Pasta", "Seafood", "Burgers", "Desserts"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Culinary Lane",
    addressLocality: "Foodie District",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "17:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "17:00",
      closes: "23:00",
    },
  ],
  hasMenu: "https://tastebite-tau.vercel.app/menu",
};

export const metadata: Metadata = {
  title: "TasteBite — Restaurant & Ordering",
  // FIX: added meta description for SEO
  description:
    "TasteBite — experience culinary excellence. Browse our menu, make a reservation, and order your favourite dishes online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantStructuredData),
          }}
        />
        <AuthProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
