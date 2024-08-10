import React from 'react'

const Button = (props) => {
  return (
    <button className={`${props.bgcolor} p-3 rounded-full my-2`}>
        {props.name}
    </button>
  )
}

export default Button