import { Routes, Route, Navigate } from "react-router";
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import FavoritePage from './pages/FavoritePage';

const AppRoutes = ({
    data = [],
    setFirstModalOpen,
    setSecondModalOpen,
    setSelectedItem,
    setCartCount,
    setFavoritesCount,
    cart = [],
    updateCart = () => {},
    favorite = [],
    updateFavorite = () => {}
}) => {
    return (
        <Routes>
            <Route path='/' element={ <HomePage products={data} 
                                                setSecondModalOpen={setSecondModalOpen}
                                                setCartCount={setCartCount}
                                                setFavoritesCount={setFavoritesCount}
                                                updateCart={updateCart}
                                    /> } 
            />
            <Route path='/cart' element={ <CartPage cart={cart} 
                                                    setFirstModalOpen={setFirstModalOpen} 
                                                    setSelectedItem={setSelectedItem}
                                                    updateCart={updateCart}
                                        />} 
            />                                   
            <Route path='/favorite' element={ <FavoritePage favorite={favorite} 
                                                            updateFavorite={updateFavorite}
                                            />} 
            />                                   
            <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default AppRoutes;