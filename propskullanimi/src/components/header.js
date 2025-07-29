import React from 'react'

export default function header(props) {
  return (
    <div style={{width:"inherit", height:"50px", backgroundColor:"black", color:"white"}}>
      {props.veri}
      {props.children}
    </div>
  )
}
