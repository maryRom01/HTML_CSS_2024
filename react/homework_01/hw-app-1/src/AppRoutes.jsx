import { Routes, Route, Navigate } from "react-router";
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import FavoritePage from './pages/FavoritePage';

const AppRoutes = ({
    data = [],
    setFirstModalOpen,
    setSecondModalOpen,
    setCartCount,
    setFavoritesCount
}) => {
    return (
        <Routes>
            <Route path='/' element={ <HomePage products={data} 
                                                setFirstModalOpen={setFirstModalOpen}
                                                setSecondModalOpen={setSecondModalOpen}
                                                setCartCount={setCartCount}
                                                setFavoritesCount={setFavoritesCount}
                                                /> } />
            <Route path='/cart' element={ <CartPage />} />                                   
            <Route path='/favorite' element={ <FavoritePage />} />                                   
            <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default AppRoutes;