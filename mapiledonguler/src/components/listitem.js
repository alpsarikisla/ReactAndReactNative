import React from 'react'
import './css/listitem.css'

export default function ListItem(props) {
  return (
    <div className='itembox'>
      <img src={props.resimyol} />
      <h4>{props.baslik}</h4>
    </div>
  )
}
