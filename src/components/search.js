import React, { Component } from 'react';
import '../App.css';

export default class Search extends Component {
    constructor(props){
      super(props);
    }
    render(){
        return(
          
<form>
  <div className="form-row">
    <div className="form-group">
      <input type="text" className="form-control"  placeholder="Search"></input>
      </div>
      <div className="form-group">
    <button type="button" className="btn btn-primary">Search</button>
      </div>
    </div>

  </form>

  
            
            )
    }
}
