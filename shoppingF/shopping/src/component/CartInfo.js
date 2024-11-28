import React from 'react';
import { CSSTransition } from 'react-transition-group';

const CartInfo = ({ isOpen, toggleCart }) => {
  const cartStyle = {
    position: 'fixed',
    top: 50,
    right: 0,
    height: '100%',
    width: '300px',
    backgroundColor: 'white',
    boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.2)',
    padding: '1rem',
    transform: 'translateX(100%)',
    transition: 'transform 300ms ease-in-out',
  };

  const cartVisibleStyle = {
    ...cartStyle,
    transform: 'translateX(0)',
  };

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="cart" unmountOnExit>
      <div style={isOpen ? cartVisibleStyle : cartStyle}>
        <button
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
          }}
          onClick={toggleCart}
        >
          X
        </button>
        <h2>Your Cart</h2>
        <p>Items in the cart will be displayed here.</p>
      </div>
    </CSSTransition>
  );
};

export default CartInfo;