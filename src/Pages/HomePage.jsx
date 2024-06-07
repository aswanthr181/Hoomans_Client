import React, { useEffect, useState } from 'react'
import MovieList from '../Components/MovieList/MovieList'
import Navbar from '../Components/Navbar/Navbar'
import CreateUserInstance from '../Axios/userAxios'
import Banner2 from '../Components/Banner/Banner2'
import { ClipLoader } from 'react-spinners'


function HomePage() {
  const userAxios = CreateUserInstance()
  const [data, setData] = useState([])
  const [isSearch, setIsSearch] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setIsSearch(false)
    setLoading(true)
    userAxios.get('/movies')
      .then((response) => {
        const res = response.data
        console.log('get the getmovie response===> ', response.data);
        if (res.status === 'true') {
          setData(res.result)
          setLoading(false)
        }
      }).catch((error) => {
        console.error(error)
      })
  }, [])




  const handleSearch = (searchText) => {
    if (searchText.trim() === '') {
      setIsSearch(false)
    } else {
      setLoading(true)
      userAxios.get(`movies/search?title=${searchText}`)
        .then((response) => {
          const res = response.data
          console.log('resulttt', res.result.length);
          setIsSearch(true)
          setData(res.result)
          setLoading(false)

        })
    }
  }
  return (
    <div>


      <Navbar handleSearch={handleSearch} />
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <ClipLoader loading={loading} size={70} />
        </div>
      ) : (
        <div>
          {!isSearch &&
            <div className='bg-slate-100 pt-10'>
              <Banner2 data={data} />
            </div>
          }
          <MovieList data={data} isSearch={isSearch} />
        </div>
      )}




    </div>
  )
}

export default HomePage