const Header = () => {
  return (
    <header className="App-header">
      <div className="header-block">
        <a href="/">
          <img
            className="left clickable"
            style={{ maxWidth: 400, margin: 10 }}
            alt="Logo"
            src={process.env.PUBLIC_URL + "/assets/BearFightLogo.png"}
          />
        </a>
        <a href="https://bear-fight-society.square.site">
          <h3 className="clickable">Store</h3>
        </a>
        <div></div>
        <a href="/">
          <h3 className="clickable">Contact</h3>
        </a>
      </div>
    </header>
  );
};

export default Header;
