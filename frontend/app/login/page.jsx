import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="mt-6 max-w-md space-y-3 rounded-2xl bg-white p-6 dark:bg-black/30">
        <input type="email" placeholder="Email" className="w-full rounded border px-3 py-2" />
        <input type="password" placeholder="Password" className="w-full rounded border px-3 py-2" />
        <button className="w-full rounded-full bg-black py-3 text-white">Login</button>
        <p className="text-sm">No account? <Link href="/register" className="underline">Register</Link></p>
      </form>
    </div>
  );
}
