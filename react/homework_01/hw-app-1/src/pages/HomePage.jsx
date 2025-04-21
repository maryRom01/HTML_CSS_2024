import ProductList from "../components/ProductList";

const HomePage = ({ products = [], setSecondModalOpen, setCartCount, setFavoriteCount, updateCart, favorite, updateFavorite }) => {

    return (
        <ProductList 
                data={products} 
                setSecondModalOpen={setSecondModalOpen}
                setCartCount={setCartCount}
                setFavoriteCount={setFavoriteCount}
                updateCart={updateCart}
                favorite={favorite}
                updateFavorite={updateFavorite}
              >
        </ProductList>
    )
}

export default HomePage;