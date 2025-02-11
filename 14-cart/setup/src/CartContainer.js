import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './context';

const CartContainer = () => {
  const { cart, total, clearCart, fetchCartItems } = useGlobalContext();
  if (!cart) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>{`$${total}`}</span>
          </h4>
        </div>
        <div className='btn-container'>
          <button className='btn clear-btn' onClick={clearCart}>
            Clear Cart
          </button>
          <button className='btn fetch-btn' onClick={fetchCartItems}>
            Fetch Cart Items
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
