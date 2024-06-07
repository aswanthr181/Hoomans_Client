import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import FavouritePage from './Pages/FavouritePage'
import { FavoriteProvider } from './Context/FavoritesContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FavoriteProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/myFavourites' element={<FavouritePage />} />
          </Routes>
        </BrowserRouter>
      </FavoriteProvider>
    </>
  )
}

export default App
