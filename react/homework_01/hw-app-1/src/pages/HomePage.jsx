import ProductList from "../components/ProductList";

const HomePage = ({ products = [], favorite = [], isFirstModalOpen, setFirstModalOpen, setSecondModalOpen }) => {

    return (
        <ProductList 
                products={products} 
                favorite={favorite}
                isFirstModalOpen={isFirstModalOpen}
                setFirstModalOpen={setFirstModalOpen}
                setSecondModalOpen={setSecondModalOpen}
              >
        </ProductList>
    )
}

export default HomePage;