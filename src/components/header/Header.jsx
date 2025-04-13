import './Header.css';
import headerImg from '../../assets/imgs/Header.jpg';

const Header = () => {
  return (
    <header
      className="header-container d-flex justify-content-center align-items-center text-center"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className="header-overlay"></div>

      <div className="header-content">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Las mejores pizzas que podrás encontrar!</p>
        <hr className="border-white" />
      </div>
    </header>
  );
};

export default Header;

