import {Link} from "react-router-dom"
function Navbar(){
    return(
<nav>
    <Link to="/">Home</Link>
     <Link to="/search">Search</Link>
      <Link to="/favourites">favourites</Link>
</nav>
    );
}
export default Navbar;