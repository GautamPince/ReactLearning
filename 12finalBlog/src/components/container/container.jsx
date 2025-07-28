import React from 'react'

function container({ children }) {
   return (
      <div className='w-full max-w-7xl mx-auto px-4 py-8'>
         {children}
      </div>
   )
}

export default container
