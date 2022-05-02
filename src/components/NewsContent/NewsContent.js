import React from 'react'
import Container from '@mui/material/Container';
import './NewsContent.css'
import NewsCard from '../NewsCard/NewsCard';
const NewsContent = ({newsArray,newsResults,loadmore,setLoadmore}) => {
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
            {loadmore <= newsResults &&(// reason we added <= is because when limit is reached button will disapper
                  <>
                  <hr/>
                  <button className='loadMore' onClick={() => setLoadmore(loadmore + 20) } >
                    Load More
                  </button>
                  </>
                )}
           
            
        </div>
    </Container>
  )
}

export default NewsContent