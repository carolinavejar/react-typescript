import React from 'react';
import { CounterManagementProps, CounterManagmentState } from './interface';

class CounterManagement extends React.Component<CounterManagementProps, CounterManagmentState> {
    constructor(props: CounterManagementProps) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    handleAddClick = () => {
        this.setState(function (prevState) {
            return{
                counter: prevState.counter + 1
            }
        }, function () {
            console.log(`Callback function`);     
        })
    }

    handleMinusClick = () => {
        this.setState({ counter: this.state.counter - 1})
    }

    render() {
        console.log(`Render`);
        
        const { ownerName } = this.props;
        const { counter } = this.state;
        return (
            <div>
                <h1> Counter Management </h1>
                <h2> Owner Name: {ownerName} </h2>
                <h2> Counter: {counter} </h2>
                <button onClick = {this.handleAddClick}>Add</button>
                <button onClick = {this.handleMinusClick}>Minus</button>
            </div>
        )
    }
}

export default CounterManagement;