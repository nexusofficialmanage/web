import React from 'react'
import './DescriptionView.css'

function DescriptionView({view, onClose}) {
    const divStyle = {
        display: view ? 'block' : 'none',
      };
  return (
    <div className='popup-container' style={divStyle}>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula mattis sem, id bibendum dui vehicula et. Duis massa est, vulputate ac ornare non, auctor sed lacus. Nam imperdiet auctor tincidunt. Donec eget sodales eros, in viverra velit. Proin in placerat tortor. Maecenas eget nunc odio. Maecenas nisl odio, aliquet pulvinar risus eu, lobortis dignissim augue. Maecenas at est sed nibh vehicula fringilla a vitae lectus. Nulla mattis lorem a tellus tincidunt lobortis. Phasellus vehicula enim sit amet ex dignissim elementum. Nam ornare dictum iaculis. Sed tellus nibh, sagittis in eleifend ac, tempor ac libero. Proin imperdiet justo in porta aliquam. Integer posuere ornare lacus, vitae rhoncus lectus porttitor id. Ut vulputate, mi in fringilla congue, leo quam porttitor ipsum, vel elementum ipsum mauris eu nisl.</div>
      <button className='close-button' onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default DescriptionView
