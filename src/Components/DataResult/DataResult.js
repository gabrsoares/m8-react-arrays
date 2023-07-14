import React from 'react'
import './DataResult.css'

const  DataResult = (props) => {

  const htmlLength = props.children.length

  return (
    <div className='results' style={{display: htmlLength <= 0? 'none': 'block'}} >
        {props.children}
    </div>
    
  )
}

export default DataResult