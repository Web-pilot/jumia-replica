import React from 'react'
import MainHero from './components/Hero/MainHero'
import TopSellingItem from './components/TopSellingItem/TopSellingItem'

const Home = ({categoryOPen}) => {
  return (
    <main>
        <MainHero categoryOPen={categoryOPen}/>
        <TopSellingItem />
    </main>
  )
}

export default Home