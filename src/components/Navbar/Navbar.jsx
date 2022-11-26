import React, { useContext, useState } from "react";
import styled from "./navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import img from "../../Assets/images/logo-dark.webp";
import { AuthContext } from "../../Context/Store";
function Navbar() {


const {Userdata,LogOut} = useContext(AuthContext)

  const navBarStyles = ({ isActive }) => {
    return {
      color: isActive ? "#fff" : "#22254b",
      background: isActive ? "#22254b" : "transparent",
      borderRadius: isActive ? "5px" : "",
      border: isActive ? "1px solid #fff" : "",
      padding: isActive ? "5px" : "",
    };
  };

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 3,
        width: 200,
      }}
    />
  );

  const [NAVBAR, setNAVBAR] = useState(false);

  const ChangeBackGround = () => {
    if (window.scrollY >= 80) {
      setNAVBAR(true);
    } else {
      setNAVBAR(false);
    }
  };
  window.addEventListener("scroll", ChangeBackGround);
  return (
    <div>
      <nav
        className={
          NAVBAR
            ? `${styled.active} navbar navbar-expand-lg fixed-top`
            : `${styled.navbar_bg} navbar navbar-expand-lg fixed-top`
        }
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={img} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Userdata && (
              <>
              
              <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to=""
                        style={navBarStyles}
                      >
                        HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/movies"
                        style={navBarStyles}
                      >
                        MOVIES
                      </NavLink>
              </li>

              
              
              </>

               
              )}
            </ul>

            {Userdata && (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-warning" type="submit">
                  Search
                </button>
              </form>
            )}
            {Userdata && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to=" "
                  >
                    {" "}
                    <i className="fab fa-facebook-f"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to=" "
                  >
                    {" "}
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to=" "
                  >
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to=" "
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user"></i>
                    <span className="mx-2 text-warning">Hello: {Userdata.first_name}</span>
                  </NavLink>

                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        className="dropdown-item px-2"
                        to="profile"
                        style={navBarStyles}
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <ColoredLine color="white" />
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        onClick={LogOut}
                        to=" "
                        style={navBarStyles}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            )}

            {!Userdata && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
               
                      <NavLink
                        className="dropdown-item mx-3"
                        to="register"
                        style={navBarStyles}
                      >
                        Register
                      </NavLink>
                   
                   
                      <NavLink
                        className="dropdown-item"
                        to="login"
                        style={navBarStyles}
                      >
                        Login
                      </NavLink>
                    

              
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
