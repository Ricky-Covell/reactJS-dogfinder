import React, { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter } from "react-router-dom"

import RouteList from "./RouteList"
import NavBar from "./NavBar"

const App = () => {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: null
  })

  useEffect(() => {
    const loadDogs = async () => {
      const res = await axios.get('http://localhost:5001/dogs')
      setDogs({
        data: res.data,
        isLoading: false
      })
    }
    loadDogs()
  }, [])

  if (dogs.isLoading) return <h1>Still Loading</h1>

  return (
    <div>
      <h1>Adopt A Dog</h1>
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <div>
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
