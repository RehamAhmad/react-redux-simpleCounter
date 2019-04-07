import React from 'react'
import { connect } from 'react-redux';
import {Add} from './actions';
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router';

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.props.Add()
    }
    render(){
        return(
            <div>
               
                <h1>Click the button </h1>
                <h2>Counter : {this.props.counter}</h2>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
const mapStateToProps=({number})=>{
    const counter = number;
    return counter
}
const mapDispatchToProps=(dispatch)=>{
    return {
        Add:()=>dispatch(Add('Add'))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);