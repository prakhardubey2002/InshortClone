import React from 'react'
import Container from '@mui/material/Container';
import './NewsContent.css'
import NewsCard from '../NewsCard/NewsCard';
const NewsContent = ({newsArray,newsResults}) => {
  return (
    <Container maxWidth="md">
        <div className='content'>
            <div className='dwonloadMessage'>
                <span className="dwonloadText">
                For best expireince use inshort app on your smartphone 
                </span>
                <img height="80%" src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="app store" />
                <img height="80%" src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="play store" />
            </div>
            {
              newsArray.map((newsItem)=>(
                <NewsCard newsItem={newsItem} key={newsItem.title} />
              ))
            }
            
        </div>
    </Container>
  )
}

export default NewsContent