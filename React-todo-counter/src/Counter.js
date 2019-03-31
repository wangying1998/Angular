import React, { Component } from 'react';
import store from './store';

export default class Counter extends Component {
    constructor() {
        super();
        // this.state = store.getState();
        this.state = {
            num: store.getState().counter
        };
        store.subscribe(() => {
            // this.setState(store.getState());
            this.setState({
                num: store.getState().counter
            });
        });
    }
    handleAdd = () => {
        let action = { type: 'add' };
        store.dispatch(action);
        // console.log(store.getState());
    };
    handleDel = () => {
        let action = { type: 'del' };
        store.dispatch(action);
    };
    oddAdd = () => {
        if (this.state.num % 2 != 0) {
            store.dispatch({ type: 'add' });
        }
    };
    asyncAdd=()=>{
        setTimeout(()=>{
            this.handleAdd();
        },1000);
    };
    render() {
        let style = { marginLeft: '10px' };
        return (
            <div style={{marginBottom:'20px'}}>
                <p>点击: {this.state.num} 次</p>
                <button style={style} onClick={this.handleAdd}>+</button>
                <button style={style} onClick={this.handleDel}>-</button>
                <button style={style} onClick={this.oddAdd}>奇数增加</button>
                <button style={style} onClick={this.asyncAdd}>异步增加(1s)</button><br />
            </div>
        )
    }
}
