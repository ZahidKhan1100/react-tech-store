import React, { Component } from 'react';
import styled from 'styled-components';
import {FaDolly, FaRedo, FaDollarSign} from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services:[
            {
                id:1,
                icon: <FaDolly></FaDolly>,
                title:'free shipping',
                text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, corrupti!'
            },
            {
                id:1,
                icon: <FaRedo/>,
                title:'30 days return policy',
                text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, corrupti!'
            },
            {
                id:1,
                icon: <FaDollarSign/>,
                title:'secured payment',
                text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, corrupti!'
            },
        ]
    }
    render() {
        return (
            <ServicesWrapper className="py-5">
                <div class="container">
                    <div class="row">
                        {this.state.services.map(items =>{
                            return(
                                <div class="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={items.id}>
                                    <div class="services-icon">
                                        {items.icon}
                                    </div>
                                    <div class="mt-3 text-capitalize">
                                        {items.title}
                                    </div>
                                    <div class="mt-3">
                                        <p>{items.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </ServicesWrapper>
        )
    }
}


const ServicesWrapper = styled.section`
background:rgba(95,183,234,0.5);
.services-icon{
    font-size:2.5rem;
    color:var(--primaryColor);
}

p{
    color:var(--darkGrey);
}
`
