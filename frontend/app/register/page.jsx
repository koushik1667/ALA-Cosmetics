export default function RegisterPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Create Account</h1>
      <form className="mt-6 max-w-md space-y-3 rounded-2xl bg-white p-6 dark:bg-black/30">
        <input placeholder="Full Name" className="w-full rounded border px-3 py-2" />
        <input type="email" placeholder="Email" className="w-full rounded border px-3 py-2" />
        <input type="password" placeholder="Password" className="w-full rounded border px-3 py-2" />
        <button className="w-full rounded-full bg-black py-3 text-white">Register</button>
      </form>
    </div>
  );
}
