import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from '../api/axios'
import Header from '../components/Header'
import RenderJoke from '../components/RenderJoke'
import Nav from '../components/Nav'

const options = [
  'Programming',
  'Dark',
  'Pun',
  'Misc',
  'Spooky',
  'Christmas',
  'Any',
]

export default function Home() {
  const [imgSrc, setImgSrc] = useState(false)
  const [showTheJoke, setShowTheJoke] = useState(false)
  const [effect, setEffect] = useState(false)
  const [joke, setJoke] = useState({ setup: '', delivery: '' })
  const [selected, setSelected] = useState('programming')

  useEffect(() => {
    const callApi = async () => {
      const { data } = await axios.get(selected)
      setJoke(data)
    }
    callApi()
  }, [selected])
  return (
    <div className="h-screen bg-gray-800">
      <Header />
      <Nav
        selected={selected}
        setSelected={setSelected}
        options={options}
        setEffect={setEffect}
        setImgSrc={setImgSrc}
        setShowTheJoke={setShowTheJoke}
      />

      <div className="grid grid-cols-3 items-center justify-items-center">
        <RenderJoke
          joke={joke}
          showTheJoke={showTheJoke}
          setShowTheJoke={setShowTheJoke}
          setImgSrc={setImgSrc}
          setEffect={setEffect}
        />
        <img
          src={imgSrc ? '/LAUGH.png' : '/THINK.png'}
          alt="laugh"
          className={`relative h-80 w-80 cursor-pointer duration-500 ${
            effect ? 'animate-magic' : ''
          }`}
          onClick={() => {
            setEffect(true)
            setShowTheJoke(!showTheJoke)
            setTimeout(() => {
              setImgSrc(!imgSrc)
            }, 250)
          }}
          onAnimationEnd={() => {
            setEffect(false)
          }}
        />
      </div>
    </div>
  )
}
