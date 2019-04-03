import React, { Component } from 'react';
import CardDetails from './cardDetails.js';


export default class CardList extends Component {
    constructor(props){
        super(props);
        this.state={products:[
{
"itemId":426185816,
"parentItemId":426185816,
"name":"Best Choice Products 6V Kids Ride-On Car Truck w/ Parent Control, 3 Speeds, LED Headlights, MP3 Player, Horn - Pink",
"msrp":186.99,
"salePrice":119.99,
"upc":"842957111008",
"categoryPath":"Toys/Kids' Bikes & Riding Toys/Ride Ons/Ride On Toys",
"mediumImage":"https://i5.walmartimages.com/asr/54dfc996-4dc2-4cb5-853a-e31ed93745f1_1.80d72ed85d6f8abdaa0f7a8603f03a5d.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
},
 {
 "itemId":54987375,
"parentItemId":54987375,
"name":"Disney/Pixar Cars 3 Lightning McQueen 20-Inch Vehicle",
"msrp":19.88,
"salePrice":9.99,
"upc":"887961437218",
"categoryPath":"Toys/Remote Control & Play Vehicles/Play Vehicles",
"mediumImage":"https://i5.walmartimages.com/asr/b2d1cedd-d595-492d-af13-f86c2e74717d_1.d57221fd05fb835f8d350d4ee95576a8.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff"
     } 
   ]
  }
}
    render(){
        let listOfProductsDisplayed='';
        if(this.props.search==''){
            listOfProductsDisplayed=this.state.products.map((itemId,index)=>{
            return <CardDetails key={index} details={itemId} add={this.props.add} remove={this.props.remove}/>
        })
       }
       else{
        let filterProducts=this.state.products.filter((itemId,index)=>{
            return itemId.name.includes(this.props.search);
        });
         listOfProductsDisplayed=filterProducts.map((itemId,index)=>{
            return <CardDetails key={index} details={itemId} add={this.props.add} remove={this.props.remove}/>
        })
    }
        return(
             <div>
               {listOfProductsDisplayed}
            </div>
        );
    
    }
}