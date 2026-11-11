import "./globals.css";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

export const metadata = {
  title: "Oilrigpro – Oil & Gas Industry",
  description: "Reproduction du template OilRigPro (front uniquement).",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        <Header />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
