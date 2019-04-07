import React from 'react'
import { connect } from 'react-redux';

class Counter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Hello React & Redux</h1>
                <h2>Counter : {this.props.counter}</h2>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return state
}
const mapDispatchToProps=(dispatch)=>{
    return {
        Add:()=>dispatch(Add('Add'))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);