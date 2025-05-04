import CartContainer from "../components/CartContainer";
import Modal from '../components/Modal';
import modalStyles from "../components/Modal/Modal.module.scss";
import { removeItemFromLocalStorageCart, addToLocalStorage } from "../utils/localStorage";
import { useDispatch, useSelector } from 'react-redux'; 
import { removeFromCart } from "../slices/cartSlice";
import { closeFirstModal } from "../slices/modalSlice";

const CartPage = ({ 
    cart = [],
    selectedItem,
    setSelectedItem
}) => {
    cart.forEach(el => {
        console.log(JSON.stringify(el));
    });

    const dispatch = useDispatch();
    const isFirstModalOpen = useSelector((state) => state.modal.isFirstModalOpen);


    const removeItemFromCart = (id) => {
        console.log(id);
        dispatch(removeFromCart(id));
        removeItemFromLocalStorageCart(id);
        const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartCount(updatedCart.length);
        addToLocalStorage('cartCount', updatedCart.length);
    }

    return (
       <>
            <CartContainer
                cartItems={cart}
                setSelectedItem={setSelectedItem}
            />

            {isFirstModalOpen && selectedItem && (
                <div className={modalStyles.modalbackdrop}>
                <Modal 
                    type="image" 
                    isOpen={isFirstModalOpen} 
                    onClose={() => dispatch(closeFirstModal())} 
                    header={`${selectedItem.title.length > 10 ? selectedItem.title.slice(0, 10) + '...' : selectedItem.title} - ${Number(selectedItem.price).toFixed(2)}`}
                    body={`${selectedItem.title.length > 30 ? selectedItem.title.slice(0, 30) + '...' : selectedItem.title} will be deleted.`}
                    firstText="No, Cancel"  
                    secondText="Yes, delete" 
                    firstClick={() => dispatch(closeFirstModal())} 
                    secondClick={() => 
                        {
                            removeItemFromCart(selectedItem.id);
                            dispatch(closeFirstModal());
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