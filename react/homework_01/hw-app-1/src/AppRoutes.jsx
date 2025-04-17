import { Routes, Route, Navigate } from "react-router";
import HomePage from './pages/HomePage';

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
            <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default AppRoutes;