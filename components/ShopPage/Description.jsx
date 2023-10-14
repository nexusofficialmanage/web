import React from 'react';
import './Description.css';

function Description({description}) {
  return (
    <div className='description'>
      <div className='descriptionheading'>
        Description
      </div>
      <div>
        {description}
      </div>
    </div>
  )
}

export default Description
