import CartContainer from "../components/CartContainer";
import Modal from '../components/Modal';
import modalStyles from "../components/Modal/Modal.module.scss";
import { removeItemFromLocalStorageCart, addToLocalStorage } from "../utils/localStorage";

const CartPage = ({ 
    cart = [], 
    updateCart = () => {},
    isFirstModalOpen,
    setFirstModalOpen,
    selectedItem,
    setSelectedItem,
    setCartCount
}) => {
    cart.forEach(el => {
        console.log(JSON.stringify(el));
    });

    const removeItemFromCart = (id) => {
        console.log(id);
        updateCart(draft => {
          const index = draft.findIndex(el => el.id === id);
    
          if (index !== -1) {
            draft.splice(index, 1)
          }
        })
        removeItemFromLocalStorageCart(id);
        const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartCount(updatedCart.length);
        addToLocalStorage('cartCount', updatedCart.length);
    }

    return (
       <>
            <CartContainer
                cartItems={cart}
                setFirstModalOpen={setFirstModalOpen}
                setSelectedItem={setSelectedItem} 
            />

            {isFirstModalOpen && selectedItem && (
                <div className={modalStyles.modalbackdrop}>
                <Modal 
                    type="image" 
                    isOpen={isFirstModalOpen} 
                    onClose={() => setFirstModalOpen(false)} 
                    header={`${selectedItem.title.length > 10 ? selectedItem.title.slice(0, 10) + '...' : selectedItem.title} - ${Number(selectedItem.price).toFixed(2)}`}
                    body={`${selectedItem.title.length > 30 ? selectedItem.title.slice(0, 30) + '...' : selectedItem.title} will be deleted.`}
                    firstText="No, Cancel"  
                    secondText="Yes, delete" 
                    firstClick={() => setFirstModalOpen(false)} 
                    secondClick={() => 
                        {
                            removeItemFromCart(selectedItem.id);
                            setFirstModalOpen(false);
                        }
                    }
                    image={selectedItem.image}
                />
                </div>
            )}
       </>
    )
}

export default CartPage;