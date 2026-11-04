import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import CustomCursor from '../components/CustomCursor';

export const metadata = {
  title: 'Crumb & Chai | Trendy Café in Hauz Khas, New Delhi',
  description: 'Chai, Crunch & Good Vibes. Fresh burgers, wraps, chai, shakes and desserts in Hauz Khas. Order now on WhatsApp or Swiggy.',
  openGraph: {
    title: 'Crumb & Chai',
    description: 'Fun, bold café in Hauz Khas, New Delhi. Since 2019.',
    images: ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen flex flex-col grain">
        <CustomCursor />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
