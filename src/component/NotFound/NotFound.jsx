import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss'
const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>Page Not Found 404 Error</h1>
            <Link to={'/'}>
                GO BACK
            </Link>
        </div>
    );
};

export default NotFound;