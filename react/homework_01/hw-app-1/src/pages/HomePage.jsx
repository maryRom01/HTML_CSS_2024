import ProductList from "../components/ProductList";

const HomePage = ({ products = [], setSecondModalOpen, setCartCount, setFavoriteCount, updateCart, updateFavorite }) => {

    return (
        <ProductList 
                data={products} 
                setSecondModalOpen={setSecondModalOpen}
                setCartCount={setCartCount}
                setFavoriteCount={setFavoriteCount}
                updateCart={updateCart}
                updateFavorite={updateFavorite}
              >
        </ProductList>
    )
}

export default HomePage;