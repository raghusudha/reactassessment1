import React, { Component } from 'react';

 
 export default class CardDetails extends Component {
   constructor(props){
       super(props);
   }
   render(){
       return(
        
                <div className="card mt-3">
                <div className="card-body">
                  <h1 className="card-title">Buy Product</h1>
               <img src={this.props.details.mediumImage}/>
               <h4>Price:{this.props.details.salePrice}</h4>
                  <h6 className="card-text">Description</h6>
                  <p>Product use for all purposes.</p>
                  <hr></hr>
                  <div className="button1">
                  <button className="btn btn-danger" onClick={()=>{this.props.add()}}>Add to Cart</button>  
                  <button className="btn btn-success" onClick={()=>{this.props.remove()}}>Remove</button>
            </div>
           </div><br></br>
        </div>
  


  
           
       )
   }
       
   }