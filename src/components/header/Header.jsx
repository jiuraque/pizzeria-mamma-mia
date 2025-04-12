import './Header.css';
import headerImg from '../../assets/imgs/Header.jpg';

const Header = () => {
  return (
    <header
      className="header-container d-flex flex-column justify-content-center align-items-center text-center"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <h1 className="text-white">¡Pizzería Mamma Mia!</h1>
        <p className="text-white">¡Las mejores pizzas que podrás encontrar!</p>
        <hr className="w-50 border-white" />
      </div>
    </header>
  );
};

export default Header;

