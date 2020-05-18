import React from 'react';
import {ProductConsumer} from '../../context';
import Title from '../Title';
import Product from '../Product';
import ProductFiltered from './ProductFiltered';

export default function ProductPage() {
    return (
        <ProductConsumer>
            {value =>{
                const {filteredProducts} = value;
                return <section className="py-5">
                    <div className="container">
                        {/* {Title} */}
                        <Title center title="our products"></Title>
                        {/* {product filtered} */}
                        <ProductFiltered></ProductFiltered>
                        
                        {/* {total counts} */}
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <h6 className="text-title">
                                    total products : {filteredProducts.length}
                                </h6>
                            </div>
                        </div>
                        {/* {Products} */}
                        
                        <div className="row py-5">
                            {filteredProducts.length === 0 ? (
                                <div className="col text-title text-center">

                                </div>
                            ):(
                    
                        
                            filteredProducts.map(product =>{
                                return <Product key={product.id} product={product}></Product>;
                            })
                            )}

                        </div>

                    </div>
                </section>
            }}
        </ProductConsumer>
    )
}
