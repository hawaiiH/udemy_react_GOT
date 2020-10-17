import React from 'react';
import '../app/app.css'
import {Link} from 'react-router-dom';

const noPage = () => {
    return (
        <>
            <h1>Page is not found</h1>
            <Link
            to=""
            className="toggle-btn">Go Home</Link>
        </>
    )
}
export default noPage;