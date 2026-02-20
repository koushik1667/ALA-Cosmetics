export default function ContactPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form className="mt-6 max-w-xl space-y-3 rounded-2xl bg-white p-6 dark:bg-black/30">
        <input placeholder="Name" className="w-full rounded border px-3 py-2" />
        <input placeholder="Email" type="email" className="w-full rounded border px-3 py-2" />
        <textarea placeholder="Message" rows="5" className="w-full rounded border px-3 py-2" />
        <button className="rounded-full bg-black px-6 py-3 text-white">Send Message</button>
      </form>
    </div>
  );
}
