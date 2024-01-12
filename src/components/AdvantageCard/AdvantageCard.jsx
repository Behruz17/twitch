import React, { useState } from 'react';

import './AdvantageCard.css'

export default function AdvantageCard({title, text, hoverImg, defaultImg}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className='advantageCard' onMouseOver={() => setHovered(true)}
    onMouseOut={() => setHovered(false)} alt="icon3">
<img className='advantage-icon' src={
  hovered ? hoverImg : defaultImg
}  />
<div>
    <div className="advantage-card-title">{title}</div>
    <p className='advantage-card-text'>{text}</p>
</div>
    </div>
  )
}
