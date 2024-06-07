import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { useFavorite } from '../../Context/FavoritesContext'

function MovieCard({ movie, isfavorite }) {
    const { toggleFavorite } = useFavorite()
    const handleFavorite = () => {
        toggleFavorite(movie)
    }

    const fallbackImage = "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk="
    return (
        <div className='relative'>
            <a href="javascript:;" className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
                <div className="relative">
                    <img className="w-full h-[370px]" 
                    src={movie.banner_image || fallbackImage } 
                    alt="movie image" 
                    onError={(e)=>e.target.src=fallbackImage} />
                    <div
                        className={`absolute  top-2 right-2 w-[30px] h-[30px] rounded-full flex items-center justify-center ${isfavorite? 'bg-white':'bg-slate-500 bg-opacity-90'}`}
                        onClick={handleFavorite}>
                        <FaHeart size={17} className={isfavorite ? 'text-red-500' : 'text-white'} />
                    </div>
                </div>
                <div className="mt-5">
                    <p className="mt-2 font-normal text-sm leading-6 text-gray-500">{movie?.year}</p>

                    <div className="flex items-center justify-between">
                        <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">{movie?.title}</h6>
                    </div>
                    <p className="mt-2 font-normal text-sm leading-6 text-gray-500">{movie?.genre}</p>
                </div>
            </a>
        </div>
    )
}

export default MovieCard