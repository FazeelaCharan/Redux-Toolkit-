import { Link } from "react-router";

const Header = () => (
  <header>
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "black",
          padding: "10px",
          listStyle: "none",
        }}
      >
        <li>
          <Link to="/" style={{ color: "wheat", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "wheat", textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ color: "wheat", textDecoration: "none" }}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/product"
            style={{ color: "wheat", textDecoration: "none" }}
          >
            Products
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
