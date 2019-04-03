import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import CardList from './components/cardList.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0,
      searchQuery:''
    };
    this.handleSearchClick=this.handleSearchClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.addtoCart=this.addtoCart.bind(this);
    this.removefromCart=this.removefromCart.bind(this);
  }
  handleSearchClick(data){
    console.log(data);
    let currentState=this.state;
    currentState.counter++;
    this.setState(currentState);
  }
  addtoCart(){
    let currentState=this.state;
    currentState.counter++;
    this.setState(currentState);

  }
  removefromCart(){
    let currentState=this.state;
    if(currentState.counter==0){
      this.setState(currentState);
    }
    else{
      currentState.counter--;
    this.setState(currentState);
    }
}
  handleChange(data){
    console.log(data);
    let currentState=this.state;
    currentState.searchQuery=data;
    this.setState(currentState);
  }
  render() {
    return (
      <div className="container">
        <Header count={this.state.counter}/><br></br>
        <Search searchText={this.handleChange}
               search={this.handleSearchClick}/>
            <CardList search={this.state.searchQuery} add={this.addtoCart} remove={this.removefromCart}/>
        </div>
    );
  }
}


