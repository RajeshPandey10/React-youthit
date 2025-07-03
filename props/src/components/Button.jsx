import React from 'react'

const Button = (props) => {
    console.log(props)
    
  return (
    <button onClick={props.click} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
      {props.component}
    </button>
  )
}

export default Button