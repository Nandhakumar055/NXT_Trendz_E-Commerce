import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      const onClickRemoveAllButton = () => {
        removeAllCartItems()
      }

      return (
        <div className="cart-main-container">
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-button"
                  onClick={onClickRemoveAllButton}
                >
                  Remove All
                </button>
                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
