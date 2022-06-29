import React from 'react'

const Button = ({ type, children }) => {
  return <button className={`btn  btn-${type} w-full`}>{children}</button>
}

export default Button
