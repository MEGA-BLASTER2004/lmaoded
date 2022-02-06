import React, { useState } from 'react'

function Header() {
  const [ImgSrc, setImgSrc] = useState(false)
  const [effect, setEffect] = useState(false)
  return (
    <div className="sticky top-0 flex w-screen items-center justify-between bg-gray-900 px-4 py-6">
      <h1 className="text-3xl text-white">
        LMAO<span className="text-xl text-green-500">DED</span>
      </h1>
      <img
        src={`${ImgSrc ? '/BLAST.png' : '/SHEESH.png'}`}
        alt="Avatar"
        className={`h-14 w-14 ${effect ? 'animate-header' : ''}`}
        onMouseEnter={() => {
          setEffect(true)
          setTimeout(() => {
            setImgSrc(true)
          }, 150)
        }}
        onMouseLeave={() => {
          setEffect(true)
          setTimeout(() => {
            setImgSrc(false)
          }, 150)
        }}
        onAnimationEnd={() => {
          setEffect(false)
        }}
      />
    </div>
  )
}

export default Header
