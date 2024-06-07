import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import MovieCard from '../Components/Utilities/MovieCard'
import { useFavorite } from '../Context/FavoritesContext'
import FavoriteList from '../Components/MovieList/FavoriteList'

function FavouritePage() {
    const {favorite} =useFavorite()
  return (
    <div>
        <Navbar/>
        <FavoriteList/>
    </div>
  )
}

export default FavouritePage