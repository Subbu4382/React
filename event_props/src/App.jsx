import { Component } from "react";

import { Product } from "./components/products";
import productData from "./assets/data/products.json"
import discount from "./assets/data/discounts.json"


class App extends Component{
  render(){
    return <>
    <Product product={productData} cardtitle="All products"/>
    <hr />
    <Product product ={discount} cardtitle = "Deal of the day"/>
    </>
  }
}

export default App