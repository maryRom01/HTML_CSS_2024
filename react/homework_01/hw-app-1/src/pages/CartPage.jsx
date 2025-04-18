import CartContainer from "../components/CartContainer";


const CartPage = ({ 
    cart = [], 
    updateCart = () => {},
    setFirstModalOpen,
    setSelectedItem
}) => {

    return (
       <>
            <CartContainer
                cartItems={cart}
                setFirstModalOpen={setFirstModalOpen}
                setSelectedItem={setSelectedItem} 
            />
       </>
    )
}

export default CartPage;