
import './App.css';
import axios from "axios";
import Navinshorts from './components/Navinshorts';
import { useState } from 'react';
import { useEffect } from 'react';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from "./ign/config"
import Footer from './components/Footer/Footer';
function App() {
  const [category,setCategory]=useState("general");
  const [newsArray,setNewsArray] = useState([]);
  const [newsResults,setNewsResults]=useState();
  const newsApi=async() =>{
    try
    {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`);
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
  }, [newsResults,category])
  console.log(newsArray)
  return (
    <div className="App">
      <Navinshorts setCategory={setCategory}/>
      <NewsContent/>
     <Footer/>
    </div>
  );
}

export default App;
