import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FaSearch, FaCartPlus} from 'react-icons/fa'
import {ProductConsumer} from '../context'


export default function Product({product}) {
    return (
        <ProductConsumer>
            {value =>{
                const {addToCart , setSingleProduct} = value;
                return(
                    <ProductWrapper className="col-10 mx-auto col-md-6 col-sm-8 col-lg-4 my-3">
                        <div className="card">
                            <div className="img-container">
                                <img src={product.image} alt="product"
                                style={{height:"320px"}} className="card-img-top p-5"></img>
                            </div>
                        </div>
                        

                    </ProductWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const ProductWrapper = styled.div`

`