import ProductList from "../components/ProductList";

const HomePage = ({ products = [], setFirstModalOpen, setSecondModalOpen, setCartCount, setFavoritesCount, updateCart }) => {

    return (
        <ProductList 
                data={products} 
                setFirstModalOpen={setFirstModalOpen}
                setSecondModalOpen={setSecondModalOpen}
                setCartCount={setCartCount}
                setFavoritesCount={setFavoritesCount}
                updateCart={updateCart}
              >
        </ProductList>
    )
}

export default HomePage;