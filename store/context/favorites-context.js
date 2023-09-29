import { createContext, useState } from "react";


export const FavoritesContext = createContext({
    ids: [],
    addFavorites: (id) => { },
    removeFavorites: (id) => { }
});

const FavoritesContextProvider = ({ children }) => {
    const [favoritMealIds, setFavoritMealIds] = useState([]);
    function addFavorites(id) {
        setFavoritMealIds((currentFavoritMealIds) => [...currentFavoritMealIds, id]);
    }

    function removeFavorites(id) {
        setFavoritMealIds((currentFavoritMealIds) => currentFavoritMealIds.filter(favId => favId !== id));
    }

    const value = {
        ids: favoritMealIds,
        addFavorites: addFavorites,
        removeFavorites: removeFavorites
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;