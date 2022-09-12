import { Link } from "react-router-dom";

function NavBar() {
  const mystyle = {
    background: "rgba(0, 0, 0, 0.1)",
    width: "100%",
    padding: "0 10px",
  };

  return (
    <div className="navBar" style={mystyle}>
      <h1>
        <Link to="/">Artist Lookup</Link>
      </h1>
    </div>
  );
}

export default NavBar;
