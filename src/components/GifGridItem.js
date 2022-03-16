import React from 'react'
import PropTypes from 'prop-types'; // IMPORT


export const GifGridItem = ( {url, title} ) => {
  return (
    <div className="card animate__animated animate__fadein">
         <img src={url} alt={title}></img>
	 <p>{ title }</p>
    </div>
  )
}

// SOTTO IL PROP TYPES :
GifGridItem.propTypes = {

url : PropTypes.string.isRequired,
title : PropTypes.string.isRequired
}

export default GifGridItem;



