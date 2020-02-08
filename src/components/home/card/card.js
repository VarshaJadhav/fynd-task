import React, { useState } from 'react';

import './style.css'

const Card = (props) => {
  const { cardData } = props;
  
  return(
    <div className="card">
      <img src={cardData.image_url} alt={cardData.name} />
      <div className="overlay">
        <div className="text">
            <label for="file">Edit</label>
            <input type="file" id="file" />
        </div>
      </div>
    </div>
  )
}

export default Card