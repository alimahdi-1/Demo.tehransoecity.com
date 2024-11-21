import "./styles.css";
import { VscCheck } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBox/SearchBar";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchBox, setSearchBox] = useState("");
  function activeSearchBox() {
    setSearchBox("active");
  }
  function deActiveSearchBox() {
    setSearchBox("deActive");
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobile(false); // Close mobile menu when switching to a larger screen
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <section className="logo-navbar"></section>

        <div className="search-input">
          <input
            placeholder="...جستجو کنید"
            type="search"
            className="search-input-container"
          ></input>
        </div>
        <SearchBar />
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li>
            <a href="#home" className="nav-link">
              خانه
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              وبلاگ
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              مقاله ها
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link">
              تماس
            </a>
          </li>
        </ul>
        <div className="header-buttons">
          <a>
            <button className="sign-in-button">ثبت نام</button>
          </a>
          <a>
            <button className="login-button">ورود</button>
          </a>
        </div>
        <h3>{searchBox}</h3>
        <div
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          <div className={`hamburger ${isMobile ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
