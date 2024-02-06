import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main className="flex text-center  min-h-screen justify-center items-center flex-col">
        <h1 className="text-3xl font-bold underline ">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href="/about" className="p-3 m-3 rounded bg-slate-500 text-3xl">About Page</Link>
      </main>
    </div>
  );
}
