import React, {Component} from 'react';
import {linkData} from './LinkData';
import {SocialData} from './SocialData';
import {items} from './productData';

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 0,
        links:linkData,
        SocialIcon:SocialData,
        cart:[],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: false
    };

    componentDidMount(){
        // from contentful items
        this.setProducts(items);
    }

setProducts = items =>{
let storeProducts = items.map(item =>{
    const {id} = item.sys;
    const image = item.fields.image.fields.file.url;
    const product = {id,...item.fields,image};
    return product;
});
console.log(storeProducts);
let featuredProducts = storeProducts.filter(item => item.featured === true);
this.setState({
    storeProducts,
    filteredProducts:storeProducts,
    featuredProducts,
    cart: this.getStorageCart(),
    singleProduct:this.getStorageProduct,
    loading: false
});
};

getStorageCart = () =>{
    return [];
}

getStorageProduct = () =>{
    return {};
}

getTotals = () => {};

addTotals = () => {};

syncStorage = () => {};

addToCArt = (id) => {
    console.log(id);
    
};

setSingleProduct = (id) => {
    console.log(`single product id ${id}`);
    
}

    handleSidebar = () =>{
        this.setState({sidebarOpen:!this.state.sidebarOpen});
    }
    handleCart = () =>{
        this.setState({cartOpen:!this.state.cartOpen});
    }
    closeCart = () =>{
        this.setState({cartOpen:false});
    }
    openCart = () =>{
        this.setState({cartOpen:true})
    }
    render(){
        return(
            <ProductContext.Provider value={
                {
                    ...this.state,
                    handleSidebar:this.handleSidebar,
                    handleCart:this.handleCart,
                    openCart:this.openCart,
                    closeCart:this.closeCart,
                    addToCArt:this.addToCArt ,
                    setSingleProduct:this.setSingleProduct
                }
            }>
            {this.props.children}
        </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider , ProductConsumer}