import React from 'react'
import { useHomeViewModel } from './model'
import { HomeView } from './view'

const Home = () => {
  const data = useHomeViewModel()

  return (
    <HomeView {...data} />
  )
}

export default Home
