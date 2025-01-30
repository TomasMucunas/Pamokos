import "./Navbar.css";

function Navbar({ toggleTheme, isDarkTheme }) {
  return (
    <nav className="navbar">
      {/* Логотип */}
      <div className="logo-container">
        <div className="logo">
          <img src="./images/logo.png" alt="" />          
        </div>
      </div>

      {/* Нижний блок (переключатель темы + аватар) */}
      <div className="nav-bottom">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Switch theme">
          {isDarkTheme ? "🌙" : "☀️"}
        </button>
        <div className="avatar">
          <img src="https://via.placeholder.com/32" alt="User avatar" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
