import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div>
            <h1>О нас</h1>
            <Link to="/">Перейти на страницу home</Link>
        </div>
    );
}

export default AboutPage;