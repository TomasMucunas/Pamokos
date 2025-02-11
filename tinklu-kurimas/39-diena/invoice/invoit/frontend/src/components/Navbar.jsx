import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext.jsx";
import AuthModal from "./AuthModal";
import "./Navbar.css";

function Navbar({ toggleTheme, isDarkTheme }) {
  const { user, logout } = useContext(AuthContext);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo">
            {/* <img src="./logo.png" alt="Logo" /> */}
          </div>
        </div>

        <div className="nav-bottom">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Switch theme"
          >
            {isDarkTheme ? "🌙" : "☀️"}
          </button>

          {user ? (
            <>
              <span className="username"> {user.username}</span>

              <button className="logout-btn" onClick={logout}>
                Get out
              </button>
            </>
          ) : (
            <button className="nav-link" onClick={() => setAuthModalOpen(true)}>
              Login / Registr
            </button>
          )}

          <div className="avatar">
            <img src="https://via.placeholder.com/32" alt="User avatar" />
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </>
  );
}

export default Navbar;
