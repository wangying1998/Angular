import {combineReducers} from 'redux';

let counter = (state=0,action)=>{
    switch(action.type){
        case 'add':
            return state+1;
        case 'del':
            return state-1;
        default:
            return state;
    }
};

let initValue = {
    num: 0,
    list: [1, 2, 3]
};
let  todo = (state = initValue, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    // let obj=Object.assign({},state,{num:100});
    switch (action.type) {
        case 'add_item':
            newState.list.push(action.value);
            return newState;
        case 'del_item':
            newState.list.splice(action.value,1);
            return newState;
        default:
            return state;
    }
};

export default combineReducers({counter,todo});
