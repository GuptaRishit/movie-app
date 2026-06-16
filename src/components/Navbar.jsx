import {Link} from "react-router-dom"
function Navbar(){
    return(
<nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-yellow-400">Movie App</h1>

    <div className="flex gap-6">
        <div className="flex gap-6">
  <Link
    className="hover:text-yellow-400 transition duration-300"
    to="/"
  >
    Home
  </Link>

  <Link
    className="hover:text-yellow-400 transition duration-300"
    to="/search"
  >
    Search
  </Link>

  <Link
    className="hover:text-yellow-400 transition duration-300"
    to="/favourites"
  >
    Favorites
  </Link>
</div>
    </div>
</nav>
    );
}
export default Navbar;