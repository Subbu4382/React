import { Component } from "react";
import { Card } from "./card";

export class Product extends Component{
    render(){
        return(
            <div>
                <h3 style={{fontSize:"40px",color:"brown"}}>{this.props.cardtitle}</h3>
                <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
                    {this.props.product.map((product,index)=> <Card productData={product} i={index}/>)}
                </div>
            </div>
        )
    }
}