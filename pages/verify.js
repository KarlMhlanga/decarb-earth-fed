import VerificationForm from '../components/VerificationForm';
import Link from 'next/link';

export default function Verify() {
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

      <main className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Email Verification</h2>
        <VerificationForm />
      </main>
    </div>
  );
}
