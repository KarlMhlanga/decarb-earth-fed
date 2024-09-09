import RegistrationForm from '../components/RegistrationForm';
import Link from 'next/link';

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-600 w-full py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-white text-2xl font-bold">Decarb Earth</h1>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                Home
              </Link>
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

      <main className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Register</h2>
        <RegistrationForm />
      </main>
    </div>
  );
}
