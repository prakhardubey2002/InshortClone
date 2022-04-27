import React from 'react'
import "./Navinshorts.css"
import HamburgerDrawericon from  './HamburgerDrawericon'
const Navinshorts = ({setCategory}) => {
  return (
    <div className='nav' >
        <div className="icon">
            <HamburgerDrawericon setCategory={setCategory}/>
        </div>
        <img style={{cursor:"pointer"}}  src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' height='82%' alt='logo'/>
    </div>
  )
}

export default Navinshorts