const redux = require('redux'); // import redux

const INITIAL_VALUE = {
    counter : 0
}

const reducer = (store = INITIAL_VALUE,action) => {
    return {counter: store.counter + 1};
}

const store = redux.createStore();

const subscriber = () => {
    const state = store.getState();
    console.log(state);
}

store.subscriber(subscriber);

store.dispatch({
    type : 'INCREMENT'
});
