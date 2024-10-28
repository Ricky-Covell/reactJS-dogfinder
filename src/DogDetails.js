import React from "react"
import { Link, Navigate } from "react-router-dom"

const DogDetails = ({ dog }) => {
  if (!dog) {
    return (
      <Navigate to='/dogs' />
    )
  }

   return (
    <div>
      <div>
        <img src={`/${dog.src}.jpg`} />
        <h2>{dog.name}</h2>
        <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>
            {fact}
          </li>
        ))}
      </ul>
      <Link to="/dogs">Home</Link>
      </div>
    </div>
   )
}

export default DogDetails

