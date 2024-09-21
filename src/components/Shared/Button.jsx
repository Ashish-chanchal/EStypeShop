import React from 'react'

const Button = ({text,bgColor,textColor,handler=()=>{}}) => {
  return (
    <button
    className={`${bgColor} ${textColor} w-fit cursor-pointer hover:scale-105 duration-300 py-2 px-4 rounded-full relative z-10`}>
      {text}
    </button>
  )
}

export default Button
