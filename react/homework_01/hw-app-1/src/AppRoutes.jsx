import { Routes, Route, Navigate } from "react-router";
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import FavoritePage from './pages/FavoritePage';

const AppRoutes = ({
    data = [],
    setFirstModalOpen,
    setSecondModalOpen,
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
                                                setFirstModalOpen={setFirstModalOpen}
                                                setSecondModalOpen={setSecondModalOpen}
                                                setCartCount={setCartCount}
                                                setFavoritesCount={setFavoritesCount}
                                                updateCart={updateCart}
                                                /> } />
            <Route path='/cart' element={ <CartPage cart={cart} updateCart={updateCart}/>} />                                   
            <Route path='/favorite' element={ <FavoritePage favorite={favorite} updateFavorite={updateFavorite}/>} />                                   
            <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default AppRoutes;