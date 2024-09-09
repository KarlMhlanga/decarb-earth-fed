import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
    <header className="bg-blue-600 w-full py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-6">
      <img class="max-w-40" src="https://www.decarb.earth/_next/static/media/DecarbLogo2.c2f0e7ac.svg"/>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/verify">
              VERIFY
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              DASHBOARD
            </Link>
          </li>
        </ul>
      </nav>
    </header>

      <main className="container mx-auto text-center py-16">
        <h1 className="text-4xl font-bold text-gray-800">decarb.earth</h1>
        <p className="mt-4 text-gray-600">Your journey to sustainability starts here.</p>
        <div className="mt-8">
          {/* <Link href="/register" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
              Get Started
          </Link> */}
        </div>
        <div className="mt-8"> <Link href="/register"
  class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
>
  <span class="absolute inset-0 border border-blue-600 group-active:border-blue-500"></span>
  <span
    class="block border border-blue-600 bg-blue-600 px-12 py-3 transition-transform active:border-blue-500 active:bg-blue-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Let's Get Started
  </span>
</Link></div>   
      </main>
    </div>
  );
}
