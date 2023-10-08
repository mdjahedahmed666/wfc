import { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";


const LatestNews = () => {
        const [news, setNews] = useState([]);
      useEffect(()=>{
        fetch('/newsData.json')
        .then(res => res.json())
        .then(data => setNews(data))
        
      },[])
      console.log(news);
  return (
    <div className="container mx-auto px-4 md:px-32 my-16 bg-purple-50">
        <div>
        <h2 className="text-center mb-4 text-3xl mt-4">Latest news</h2>
        <p className="mb-2 text-center">Find here latest news and get updated.</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-1/4 text-blue-600 mb-8">
          <hr className="w-1/3 text-2xl mx-auto" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((news,index) =><NewsCard key={index} news={news}></NewsCard>)}
      </div>
        
    </div>
  )
}

export default LatestNews;