import ProductList from "../components/ProductList";

const HomePage = ({ products = [], setSecondModalOpen, setCartCount, setFavoritesCount, updateCart }) => {

    return (
        <ProductList 
                data={products} 
                setSecondModalOpen={setSecondModalOpen}
                setCartCount={setCartCount}
                setFavoritesCount={setFavoritesCount}
                updateCart={updateCart}
              >
        </ProductList>
    )
}

export default HomePage;