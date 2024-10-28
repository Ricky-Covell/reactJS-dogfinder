import React from "react"
import { Link } from "react-router-dom"

const DogList = ({ dogs }) => {
  return (
    <div>
      <div>
        <h2>
          Click on a dog for more information.
        </h2>
      </div>
      <div>
        {dogs.map(dog => (
          <div key={dog.name}>
            <img src={`/${dog.src}.jpg`}></img>
            <h3>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                {dog.name}
              </Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DogList