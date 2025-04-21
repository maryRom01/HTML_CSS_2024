import { Routes, Route, Navigate } from "react-router";
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import FavoritePage from './pages/FavoritePage';

const AppRoutes = ({
    data = [],
    isFirstModalOpen,
    setFirstModalOpen,
    setSecondModalOpen,
    selectedItem,
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
                                                    isFirstModalOpen={isFirstModalOpen}
                                                    setFirstModalOpen={setFirstModalOpen} 
                                                    selectedItem={selectedItem}
                                                    setSelectedItem={setSelectedItem}
                                                    updateCart={updateCart}
                                                    setCartCount={setCartCount}
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