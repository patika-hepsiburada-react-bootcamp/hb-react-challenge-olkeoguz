import React from 'react'
import Bar from './Bar/Bar'
import Filters from './Filters/Filters';
import "./Listing.scss";
import Products from './Products/Products';

const index = () => {
    return (
        <div className="listing-container">
            <Bar />
            <div className="body">
                <Filters/>
                <Products/>
            </div>
        </div>
    )
}

export default index
