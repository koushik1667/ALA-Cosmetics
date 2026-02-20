'use client';

import Link from 'next/link';
import { Heart, Moon, ShoppingBag, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useShop } from '@/context/ShopContext';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const { cart, wishlist } = useShop();

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur dark:bg-ink/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold">Ala – The New Wave</Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
          <button aria-label="toggle theme" onClick={toggleTheme}>{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button>
          <Link href="/shop" className="relative"><Heart size={18} /><span className="absolute -right-2 -top-2 rounded-full bg-ink px-1 text-[10px] text-white">{wishlist.length}</span></Link>
          <Link href="/cart" className="relative"><ShoppingBag size={18} /><span className="absolute -right-2 -top-2 rounded-full bg-black px-1 text-[10px] text-white">{cart.length}</span></Link>
        </div>
      </nav>
    </header>
  );
}
