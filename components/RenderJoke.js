import React from 'react'

function RenderJoke({
  joke,
  showTheJoke,
  setShowTheJoke,
  setImgSrc,
  setEffect,
}) {
  return (
    <div
      className="col-span-2 mx-auto my-auto h-fit w-10/12 cursor-pointer rounded-md bg-green-500 px-8 py-10 font-mono text-xl text-white"
      onClick={() => {
        setShowTheJoke(!showTheJoke)
        setEffect(true)
        setTimeout(() => {
          setImgSrc(!showTheJoke)
        }, 250)
      }}
    >
      <div>
        <p>{joke.setup ?? joke.joke}</p>
        <p
          className={`${
            showTheJoke ? 'opacity-100' : 'opacity-0'
          } duration-300`}
        >
          {joke.delivery}
        </p>
      </div>
    </div>
  )
}

export default RenderJoke
