import logo from '../assets/troll-face.png';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="meme logo" />
      <h1 className="header-title">Meme Generator</h1>
      <h2 className="header-info">React Course - Project 3</h2>
    </div>
  );
};

export default Header;
