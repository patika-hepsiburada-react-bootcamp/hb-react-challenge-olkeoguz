import React, { useRef } from 'react'
import Bar from './Bar/Bar'
import Filters from './Filters/Filters';
import "./Listing.scss";
import Products from './Products/Products';

const index = () => {
    const scrollToProductsRef = useRef();
    return (
        <div ref={scrollToProductsRef} className="listing-container">
            <Bar />
            <div className="body">
                <Filters/>
                <Products scrollToProductsRef={scrollToProductsRef}/>
            </div>
        </div>
    )
}

export default index
