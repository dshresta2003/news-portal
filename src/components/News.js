import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/News.css'; // Add custom styles for the body section

const News = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const apiKey = '2939f53812474f7299919cf28ba77fef';

  const newsCategory = category || 'general';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${newsCategory}&apiKey=${apiKey}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching the news data:', error);
      }
    };

    fetchNews();
  }, [newsCategory]);

  return (
    <div className="news-container">
      <h2 className="news-heading">
        {newsCategory.charAt(0).toUpperCase() + newsCategory.slice(1)} News
      </h2>
      <div className="news-articles">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <h3>{article.title}</h3>
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="article-image" />
            )}
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
