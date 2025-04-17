import ProductList from "../components/ProductList";

const HomePage = ({ products = [], setFirstModalOpen, setSecondModalOpen, setCartCount, setFavoritesCount }) => {

    return (
        <ProductList 
                data={products} 
                setFirstModalOpen={setFirstModalOpen}
                setSecondModalOpen={setSecondModalOpen}
                setCartCount={setCartCount}
                setFavoritesCount={setFavoritesCount}
              >
        </ProductList>
    )
}

export default HomePage;