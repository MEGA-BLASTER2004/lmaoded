import React from 'react'

const RenderButton = ({
  text,
  selected,
  setSelected,
  setImgSrc,
  setShowTheJoke,
  setEffect,
}) => {
  return (
    <button
      onClick={() => {
        setEffect(true)
        setShowTheJoke(false)
        setTimeout(() => {
          setImgSrc(false)
        }, 250)
        setSelected(text.toLowerCase())
      }}
      className={`${
        selected == text.toLowerCase()
          ? 'border-b border-white text-white'
          : 'border-b border-transparent text-green-500 duration-150 hover:border-green-500'
      }`}
    >
      {text}
    </button>
  )
}

function Nav({
  selected,
  setSelected,
  options,
  setImgSrc,
  setShowTheJoke,
  setEffect,
}) {
  return (
    <div className="mb-16 flex space-x-4 pl-4 pt-4 text-lg">
      {options.map((option) => {
        return (
          <RenderButton
            text={option}
            selected={selected}
            setSelected={setSelected}
            setImgSrc={setImgSrc}
            setShowTheJoke={setShowTheJoke}
            setEffect={setEffect}
          />
        )
      })}
    </div>
  )
}

export default Nav
