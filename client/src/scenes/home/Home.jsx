import React from 'react'
import Announcement from '../../components/Announcemen'
import Categories from '../../components/Categories'
import Navbar from '../../components/Navbar'
import Products from '../../components/Products'
import Slider from '../../components/Slider'

const Home = () => {
  return (
    <div style={{width: "100%"}}>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Home
