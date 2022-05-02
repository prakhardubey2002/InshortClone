
import './App.css';
import axios from "axios";
import Navinshorts from './components/Navinshorts';
import { useState } from 'react';
import { useEffect } from 'react';
import NewsContent from './components/NewsContent/NewsContent';

import Footer from './components/Footer/Footer';
function App() {
  const [category,setCategory]=useState("general");
  const [newsArray,setNewsArray] = useState([]);
  const [newsResults,setNewsResults]=useState();
  const[loadmore,setLoadmore]=useState(20)
  const newsApi=async() =>{
    try
    {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadmore}`);
      setNewsArray(news.data.articles); 
      setNewsResults(news.data.totalResults);
    }
    catch(error)
    {
      console.log(error);
    }
  }
  useEffect(() => {
    newsApi();
  }, [newsResults,category,loadmore])// api will fire again for these useeffect dependency like when button is clicked for apu pagination category is upfdated for srted list news  or for complete newsResult
  console.log(newsArray)
  return (
    <div className="App">
      <Navinshorts setCategory={setCategory}/>
      <NewsContent
      setLoadmore={setLoadmore}  
      loadmore={loadmore} 
      newsArray={newsArray} 
      newsResults={newsResults} />
     <Footer/>
    </div>
  );
}

export default App;
