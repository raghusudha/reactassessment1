import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    constructor(){
      super();
    }
    render(){
        return(
            <div className="header">
            <div className="header-body">
              <h2>ShopNow</h2>
            <span type="button" className="btn btn-secondary">Cart<label className="badge">{this.props.count}</label></span>
            </div>
          </div>  
        )
    }
}