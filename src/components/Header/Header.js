import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Film Land 🎥
    </span>
  );
};

export default Header;
