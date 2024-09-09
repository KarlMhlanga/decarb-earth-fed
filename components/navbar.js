export default function Navbar() {
    return (
      <nav className="p-4 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li href="/">HOME</li>
          <li href="#">PROFILE</li>
          <li class="logout" href="/">LOG OUT</li>
        </ul>
      </nav>
    );
  }
  