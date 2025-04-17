import CartContainer from "../components/CartContainer";

const CartPage = (
    { cart = [], updateCart = () => {} }
) => {
    return (
       <>
            <CartContainer
                cartItems={cart}
            />
       </>
    )
}

export default CartPage;