import React from 'react'
import './BurgerIcon.css'

export default function BurgerIcon({onClick, iconSrc}) {
  return (
<img onClick={onClick} className='burger-menu' src={iconSrc} alt="" />
  )
}
