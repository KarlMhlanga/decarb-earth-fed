import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 w-full py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-white text-2xl font-bold">Decarb Earth</h1>
          <ul className="flex space-x-6">
          <li>
        <Link href="/">Home</Link>
      </li>
            <li>
              <Link href="/verify">
                Verify
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto text-center py-16">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Decarb Earth</h1>
        <p className="mt-4 text-gray-600">Your journey to sustainability starts here.</p>
        <div className="mt-8">
          <Link href="/register" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
              Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}
