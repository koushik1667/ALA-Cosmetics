import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white px-4 py-10 dark:bg-black dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Ala – The New Wave</p>
        <div className="flex gap-4">
          <Link href="#">Instagram</Link>
          <Link href="#">TikTok</Link>
          <Link href="#">Pinterest</Link>
        </div>
      </div>
    </footer>
  );
}
