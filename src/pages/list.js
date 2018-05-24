import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: this.props.no ? this.props.no : 0
        }
    }
    xyz() {
        let number = this.state.number
        number = 10 + number
        return (<div onClick={() => this.setState({ number: this.state.number + 1 })}> 
                    Total results you have {number}</div>)
    }
    render() {
        console.log("Property : ", this.props)
        console.log("State : ", this.state)
        const { name, job, like, no } = this.props
        
        return (
            <div className="list-item">
                <div>Name : {this.props.children}</div>
                <div>Job : {job}</div>
                <div>Like : {like}</div>
                {no ? this.xyz() : null}
            </div>
        );
    }
}

export default List;