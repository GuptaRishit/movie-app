import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gray-900/90 backdrop-blur text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold text-yellow-400">Movie App</h1>

        <div className="flex items-center gap-6">
          <Link
            className="text-sm font-medium text-white/90 transition hover:text-yellow-400"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-white/90 transition hover:text-yellow-400"
            to="/search"
          >
            Search
          </Link>
          <Link
            className="text-sm font-medium text-white/90 transition hover:text-yellow-400"
            to="/favourites"
          >
            Favourites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;