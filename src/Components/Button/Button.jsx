import React from 'react'

const Button = ({children}) => {
  return (
    <div>
      <button className='bg-[#FF691C] rounded-lg px-6 py-2'>{children}</button>
    </div>
  )
}

export default Button
