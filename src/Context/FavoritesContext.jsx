import { createContext, useContext, useState, useEffect } from 'react'

const FavoriteContext = createContext()

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        const savedFavorite = JSON.parse(localStorage.getItem('favorites') || '[]')
        setFavorite(savedFavorite)
    }, [])
    
    const toggleFavorite = (movie) => {
        const isFavorite = favorite.some((fav) => fav.id === movie.id);
        const updatedFavorites = isFavorite
            ? favorite.filter((fav) => fav.id !== movie.id)
            : [...favorite, movie];

        setFavorite(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Store the updated favorites list
    };
    return (
        <FavoriteContext.Provider value={{ favorite, toggleFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}
