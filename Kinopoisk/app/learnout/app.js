import React from 'react';
import MovieCard from './components/MovieCard';
import './App.css'; // Подключаем основные стили
import Link from 'next/link'

<Link href="/learnout" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
    Узнать больше
</Link>

import movie1 from './images/hero-image-01.jpg';
import movie2 from './images/hero-image-01.jpg';
import movie3 from './images/hero-image-01.jpg';
import movie4 from './images/hero-image-01.jpg';
import movie5 from './images/hero-image-01.jpg';
import movie6 from './images/hero-image-01.jpg';

const App = () => {
    const movies = [
        { title: 'Movie 1', image: movie1 },
        { title: 'Movie 2', image: movie2 },
        { title: 'Movie 3', image: movie3 },
        { title: 'Movie 4', image: movie4 },
        { title: 'Movie 5', image: movie5 },
        { title: 'Movie 6', image: movie6 },
    ];

    return (
        <div className="app">
            <h1 className="app-title">Movie Collection</h1>
            <div className="movie-cards-container">
                {movies.map((movie, index) => (
                    <MovieCard key={index} title={movie.title} image={movie.image} />
                ))}
            </div>
        </div>
    );
};

export default App;
