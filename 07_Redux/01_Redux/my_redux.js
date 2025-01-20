const myStroe = myCreateStore(reducer);


function createFunc(reducer) {
    let state;
    const store = {
        getState(){
            return state;
        },
        dispaych(action){
            state = reducer(state,action);
        },
        scscriber(){},
    }
    return store;
}

console.log(createFunc());