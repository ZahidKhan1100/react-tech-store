import React from 'react';
import Hero from '../components/Hero';
import CartSection from '../components/cartPage';
import cartBcg from '../images/storeBcg.jpeg';

export default function CartPage() {
    return (
        <>
        <Hero img={cartBcg}></Hero>
        <CartSection></CartSection> 
       </>
    )
}
