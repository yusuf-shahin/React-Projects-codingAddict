import CartItem from "./CartItem"
import { glovalContext } from "./context"
import { cartItems } from "./data"
const CartContainer = () => {
  const { cart, clearCart } = glovalContext()
  console.log(cart)

  const cartArray = Array.from(cart)
  console.log(cartArray)

  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem, index) => {
          // console.log(cartItem)
          const [id, item] = cartItem
          console.log(item)

          return <CartItem key={id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>$10</span>
          </h5>
        </div>
        <button className='btn btn-hipster' onClick={() => clearCart()}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
