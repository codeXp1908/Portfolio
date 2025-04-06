import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Showcase from "./Showcase";
import Landing from "./Landing";
import { FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
  const [currentView, setCurrentView] = useState("about");
  const [activeLink, setActiveLink] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case "landing":
        return <Landing />;
      case "about":
        return <About />;
      case "showcase":
        return <Showcase />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  const handleNavClick = (view) => {
    setCurrentView(view);
    setActiveLink(view);
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="Home_Container">
      {/* Mobile Header */}
      <div className="mobile-header">
        <h1 className="title_Text">Prakhar.</h1>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`title_Container ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <h1 className="title_Text desktop-title">Prakhar.</h1>

        <div className="sideBar_Container">
          <section className="navLinks_Container">
            <ul className="nav_Links">
              <li className="nav_Btn">
                <a
                  href="#landing"
                  onClick={() => handleNavClick("landing")}
                  className={activeLink === "landing" ? "active" : ""}
                >
                  Home
                </a>
              </li>
              <li className="nav_Btn">
                <a
                  href="#about"
                  onClick={() => handleNavClick("about")}
                  className={activeLink === "about" ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li className="nav_Btn">
                <a
                  href="#showcase"
                  onClick={() => handleNavClick("showcase")}
                  className={activeLink === "showcase" ? "active" : ""}
                >
                  Showcase
                </a>
              </li>
              <li className="nav_Btn">
                <a
                  href="#portfolio"
                  onClick={() => handleNavClick("portfolio")}
                  className={activeLink === "portfolio" ? "active" : ""}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav_Btn">
                <a
                  href="#contact"
                  onClick={() => handleNavClick("contact")}
                  className={activeLink === "contact" ? "active" : ""}
                >
                  Contact
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="copyright_Container">
          <p>Copyright&copy;</p>
        </div>
      </div>

      <div className="Content_Container">{renderContent()}</div>
    </div>
  );
};

export default Home;