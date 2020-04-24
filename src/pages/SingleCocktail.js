import React from 'react'
import { useParams } from 'react-router-dom';

function SingleCocktail() {
  const { id } = useParams()
  return (
    <div>
      <h1>Single page cocktail :{id}</h1>
    </div>

  )

}

export default SingleCocktail;