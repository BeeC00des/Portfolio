import React from 'react'

const Container = ({children }) => {
  return (
    <div className='max-w-[1400px] mx-auto px-4 sm:px-8'>{children}</div>
  )
}

export default Container