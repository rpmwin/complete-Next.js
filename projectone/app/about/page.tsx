import Link from "next/link";




function About() {
  return (
    <div className="text-3xl h-screen flex justify-center items-center flex-col">
      <div>Hi from About</div>
      <Link href="/" className="p-3 m-3 rounded bg-slate-500">Return to Home</Link>
    </div>
  );
}

export default About;
