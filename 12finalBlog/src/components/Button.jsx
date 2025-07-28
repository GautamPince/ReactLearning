import React from 'react'

function Button({
   children,
   type = 'button',
   bgcolor = 'bg-blue-700',
   textcolor = 'text-white',
   className = '',
   ...props
}) {
   return (
      <button
         className={` px-4 py-2 rounded-lg ${bgcolor} ${textcolor} ${className}`} type={type} {...props}>
         {children}
      </button>
   )
}

export default Button
