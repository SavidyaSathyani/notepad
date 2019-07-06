import React from 'react';
import { Route, Link } from 'react-router-dom';

const Page3 = ({match}) => {
    return (
        <div className="row">
            <h2>Card Categories</h2>
            <ul>
                <li><Link to={`${match.url}/react`}>React</Link></li>
                <li><Link to={`${match.url}/redux`}>Redux</Link></li>
                <li><Link to={`${match.url}/react-router`}>React-router</Link></li>
            </ul>
            <Route path={`${match.url}/:categoryId`} component={Category} />
        </div>
    );
}

const Category = ({match}) => ( 
    <h3>{match.params.categoryId}</h3>
);

export default Page3; 