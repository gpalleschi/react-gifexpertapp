import React from 'react'

export const GifGridItem = ( {id, url, title} ) => {
  return (
    <div className="card animate__animated animate__bounce">
         <img src={url} alt={title}></img>
	 <p>{ title }</p>
    </div>
  )
}
