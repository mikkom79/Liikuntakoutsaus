import logo from "./../img/logo_small.png";

const Header = () => {
  return (
    <header>
      <img
        src={logo}
        alt="City of Helsinki"
        aria-label="City of Helsinki"
        width="120px"
        height="55px"
      />
    </header>
  );
};

export default Header;
