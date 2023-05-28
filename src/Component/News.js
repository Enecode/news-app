import React, { useEffect, useState } from 'react';
import "./News.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faReddit, faFacebook, faGooglePlus, } from "@fortawesome/free-brands-svg-icons";

const News = () => {
  const [articles, setArticles] = useState([]);
  const readMore = (a) => {
    window.location.href = a;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2023-05-16&sortBy=popularity&apiKey=d5cb9edddd154ff08436d8532b34efd0');
        const data = await response.json();
        setArticles(data.articles);
  
      } catch (error) {
        console.log('Error fetching news articles:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
        
      {articles.map((article) => (
        <div className='container'>
          <div className='image-container'>
            <img src={article.urlToImage} alt={article.title} className='image' />
          </div>
          <div className='text-container'>
            <div key={article.title}>
              <h2 className='title'>{article.title}</h2>
              <p className='description'>{article.description}</p>
              <div className='containers'>
                <div><p className='source'>{article.source.name}</p></div>
                <div className="social-button">
                  <a href="#j">
                    <FontAwesomeIcon icon={faReddit} className="reddit-Icon" size="2x" />
                  </a>
                  <a href="#j" className="twitter-Icon">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="#j" className="facebook-Icon">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a href="#j" className="google-plus-Icon">
                    <FontAwesomeIcon icon={faGooglePlus} size="2x" />
                  </a>
                  <a href="#j">
                    <FontAwesomeIcon icon={faLinkedin} className="linkedin-Icon" size="2x" />
                  </a>
                </div>
                <div className=''><button className='url' onClick={() => readMore(article.url) }>Read More</button></div>
              </div>
            </div>
            <hr />
          </div>
        
      </div>
    ))}
    </>
  );
};

export default News;
