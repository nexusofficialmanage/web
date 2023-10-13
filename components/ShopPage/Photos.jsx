import React from 'react'

function Photos({images}) {
  return (
    <div>
      {images && images.map((image) => {
        return <img src={image}/>
      })}
    </div>
  )
}

export default Photos
