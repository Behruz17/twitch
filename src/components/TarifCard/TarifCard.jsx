import React from 'react'
import "./TarifCard.css"

export default function TarifCard({title, price, items, hit}) {
  return (
    <div className='tarif-card'>
        <div className="tarif-card-header">
{hit ? <img src="/assets/hit.svg" alt="" className="hit" /> : ''}
            <p className="tarif-card-title">{title}</p>
            <p className="tarif-card-price">{price}</p>
        </div>
        <ul className='tc-list'>
  {
    items.map((el, index) => {
      return <li key={index} className="tc-list-item"><div className="dot"></div> {el}</li>
    })
  }
        </ul>
    <div className="btn-container">
    <button className='tc-btn'>Sign Up</button>
    </div>
    </div>
  )
}
