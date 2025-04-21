import FavoriteContainer from "../components/FavoriteContainer";

const FavoritePage = ({ 
    favorite = []
}) => {
    return (
        <FavoriteContainer
            favorite={favorite}
        />
    )
}

export default FavoritePage;