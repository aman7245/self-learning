import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increament(){
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log('calback val = ',this.state.count)}); 
        // // if some code need to excute after state change put inside callback function
        // console.log(this.state.count);  
        // // setState in asynchronous so exeution may differ

        this.setState(prevState => ({
            count : prevState.count + 1
        }))
    }

    increamentFive(){
        this.increament();
        this.increament();
        this.increament();
        this.increament();
        this.increament();
    }

    render() {
        return (
            <div>
               <div>Count = {this.state.count}</div>
               <button onClick={() => this.increamentFive()}>Increment</button>
            </div>
        )
    }
}

export default counter
