import { Routes, Route } from "react-router";
import { useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import FavoritePage from './pages/FavoritePage';

const AppRoutes = ({ products, cart, favorite, isFirstModalOpen, setFirstModalOpen, setSecondModalOpen, selectedItem, setSelectedItem }) => {

    return (
        <Routes>
            <Route path='/' element={ <HomePage products={products} 
                                                cart={cart}
                                                favorite={favorite}
                                                isFirstModalOpen={isFirstModalOpen}
                                                setFirstModalOpen={setFirstModalOpen}
                                                setSecondModalOpen={setSecondModalOpen}
                                    /> } 
            />
            <Route path='/cart' element={ <CartPage cart={cart} 
                                                    selectedItem={selectedItem}
                                                    setSelectedItem={setSelectedItem}
                                        />} 
            />                                   
            <Route path='/favorite' element={ <FavoritePage favorite={favorite} 
                                            />} 
            />                                   
            <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
    )
};
   

export default AppRoutes;