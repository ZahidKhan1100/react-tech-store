import React from 'react';
import ProductPage from '../components/ProductPage/ProductPage';
import Hero from '../components/Hero';
import productsBcg from '../images/productsBcg.jpeg';

export default function Products() {
    return (
        <>
         <Hero img={productsBcg}></Hero>  
         <ProductPage></ProductPage>
        </>
    )
}
