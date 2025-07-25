const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header__logo"></div>
      <nav className="app-header__nav">
        <div className="app-header__hamburger-menu"></div>
        <ul className="app-header__nav-links">
          <li className="app-header__nav-link">Nav Link</li>
          <li className="app-header__nav-link">Nav Link</li>
          <li className="app-header__nav-link">Nav Link</li>
          <li className="app-header__nav-link">Nav Link</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

