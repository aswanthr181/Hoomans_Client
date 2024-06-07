import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useFavorite } from '../../Context/FavoritesContext'
import MovieCard from '../Utilities/MovieCard'
import { useNavigate } from 'react-router-dom'

function FavoriteList() {
    const { favorite } = useFavorite()
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState('')

    const handleSearchFavorite = (e) => {
        const value = e.target.value
        setSearchInput(value)
    }

    const filteredFavorites = favorite.filter((movie) =>
        movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    const gotToHomePage = () => {
        navigate('/')
    }

    return (
        <div className='bg-slate-100 h-full'>

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='flex flex-wrap justify-between items-start'>
                        <div className='flex  '>
                            <div
                                className=" bg-white border-2 mt-1 border-black  w-[34.29px] h-[34.29px] rounded-full flex items-center justify-center mr-2"
                                onClick={gotToHomePage}>
                                <MdKeyboardArrowLeft />
                            </div>
                            <h2 class="  font-manrope font-bold text-3xl md:text-4xl text-black mb-8 max-lg:text-center">
                                My Favorites
                            </h2>
                            
                        </div>
                        <div className="relative ">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text"
                                id="search-navbar"
                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg "
                                placeholder="Search from Favorites"
                                value={searchInput}
                                onChange={handleSearchFavorite} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredFavorites.length === 0 ? (
                            <p>No favorite movies yet.</p>
                        ) : (
                            filteredFavorites.map((movie) => (
                                <div key={movie.id}>
                                    <MovieCard movie={movie} isfavorite={true} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FavoriteList