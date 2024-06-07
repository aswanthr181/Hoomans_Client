import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
import { FaHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Navbar({ handleSearch }) {
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()
  const handleInput = (e) => {
    const value = e.target.value
    setSearchInput(value)
    handleSearch(value)
  }
  const goToFavorite = () => {
    navigate('/myFavourites')
  }
  return (

    <>
      <nav className="bg-white border-gray-200   ">
        <div className='h-[84px] '>
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8    flex items-center  justify-between  mx-auto  my-auto mt-10">

            <div className='flex flex-wrap  justify-between items-center  md:w-1/2 md:3/4 '>
              <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">

                <div className=" bg-custom-pink  w-[30px] h-[30px] rounded-full flex items-center justify-center">
                  <FontAwesomeIcon size={16} className='text-white' icon={faClapperboard} />
                </div>

                <span className="hidden md:block self-center text-2xl font-semibold whitespace-nowrap ">GET MOVIES</span>
              </a>
              {/* <div className="flex md:order-2"> */}

              <div className="relative w-5/6  md:w-2/3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg "
                  placeholder="Search movies and series"
                  value={searchInput}
                  onChange={handleInput} />
              </div>

              {/* </div> */}
            </div>
            <div onClick={goToFavorite}>
              <button className='bg-custom-pink w-10 lg:w-[153px] h-[40px] rounded-xl' >
                <div className='flex items-center justify-center gap-[20px]'>
                  <div>
                    <FaHeart className='text-white' />

                  </div>
                  <div className=' hidden lg:block  '>
                    <span className='text-white text-md'>my favorite</span>
                  </div>
                </div>

              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar