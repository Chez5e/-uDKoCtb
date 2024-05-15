import React from 'react';
import './MovieCard.css'; // Подключаем стили для карточек;
import Link from 'next/link'
<Link href="/learnout" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Узнать больше
                </Link>

const MovieCard = ({ title, image }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-image" />
      <h3 className="movie-title">{title}</h3>
    </div>
  );
};

export default MovieCard;
