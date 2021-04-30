import React from 'react'



function StarRating( value ) {

  const stars = Array.from({ length: 5 }, () => '☆')

  console.log(stars)

  return (

    <>
      <div>{value}</div>
    </>
  )


}
export default StarRating