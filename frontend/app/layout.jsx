import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import { ShopProvider } from '@/context/ShopContext';

export const metadata = {
  title: 'Ala – The New Wave | Premium Lip Gloss',
  description: 'Shop premium, glossy, long-lasting lip gloss for bold, confident looks.',
  keywords: ['lip gloss', 'Ala', 'beauty', 'Gen Z beauty'],
  openGraph: {
    title: 'Ala – The New Wave',
    description: 'Shine Different. Shine Ala.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ShopProvider>
            <Navbar />
            <main className="mx-auto max-w-6xl px-4">{children}</main>
            <Footer />
          </ShopProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
