export default function Navbar() {
    return (
      <header className="bg-blue-600 w-full py-4 shadow-md sticky top-0 z-50">
  <nav className="container mx-auto flex justify-between items-center px-6">
    <h1 className="text-white text-2xl font-bold">Decarb Earth</h1>
    <ul className="flex space-x-6">
      <li>
        <Link href="/">
          <a className="text-white hover:underline">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/register">
          <a className="text-white hover:underline">Register</a>
        </Link>
      </li>
      <li>
        <Link href="/verify">
          <a className="text-white hover:underline">Verify</a>
        </Link>
      </li>
      <li>
        <Link href="/dashboard">
          <a className="text-white hover:underline">Dashboard</a>
        </Link>
      </li>
    </ul>
  </nav>
</header>

    );
  }
  