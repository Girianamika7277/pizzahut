import React, { useContext } from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Mycontext } from '../App';

const Header = (props) => {
  const { cartItems, counter } = props;
  const navigate = useNavigate();
  const {login} = useContext(Mycontext)

  const navigateContact = () => {
    navigate('/login');
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateCart = () => {
    navigate('/cart', { state: { cartItems: cartItems } });
  };

  return (
    <header className="header">
      <img
        className="logo"
        alt="logo"
        src="https://w7.pngwing.com/pngs/462/807/png-transparent-old-pizza-hut-restaurant-yum-brands-pizza-food-text-logo-thumbnail.png"
      />

      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item">
            <input
              className="inputf"
              type="text"
              placeholder="Search Pizza"
              value={props.searchText}
              onChange={(e) => props.setSearchText(e.target.value)}
            />
          </li>
          <li className="header__menu-item abc" onClick={scrollToFooter}>
            About
          </li>
          <li className="header__menu-item abc" onClick={navigateContact}>{login ? "Logout" : "Login"}
          
          </li>
          <li className="header__menu-item" onClick={navigateCart}>
            <FaShoppingCart className="cart-icon" />
            {counter > 0 && <span className="cart-counter">{counter}</span>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
