import React, { useContext } from 'react'
import {TemaData} from '../App'

export default function Container() {
  return (
    <div style={useContext(TemaData)}>
        <h1>React Uygulamaları</h1>
        <h2>useContext ile Componentler arası veri taşıma uygulaması</h2>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra leo at lectus ullamcorper tempor.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra leo at lectus ullamcorper tempor.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra leo at lectus ullamcorper tempor.</p>
    </div>
  )
}
