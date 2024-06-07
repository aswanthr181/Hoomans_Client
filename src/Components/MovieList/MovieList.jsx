import React, { useEffect, useState } from 'react'
import MovieCard from '../Utilities/MovieCard'
import { useFavorite } from '../../Context/FavoritesContext'

function MovieList({ data,isSearch }) {
  const { favorite } = useFavorite()




  return (
    <div className='bg-slate-100 h-full'>
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
          <h2 class="font-manrope font-bold text-4xl text-black mb-8 max-lg:text-center">
            {isSearch?"Search":"Movies"}
          </h2>
          {isSearch &&
          <h6 className='text-black mb-6'>{data?.length } results found</h6>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.map((movie, i) => {
              return (


                <div key={movie?.id}>
                  <MovieCard movie={movie} isfavorite={favorite.some((fav) => fav.id === movie.id)} />
                </div>


              )
            })}
          </div>
        </div>
      </section>
    </div>


  )
}

export default MovieList