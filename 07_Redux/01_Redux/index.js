import { createStore } from 'redux';
const postCount = document.querySelector('.post-count');

let initialState = {
    post: 0,
    name: "Saliram Chaudhary",
    age: 25,
}

// ctrl + d -> used to select same name 

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'post/INCREMENT': {
            return { ...state, post: state.post + 1 };
        }
        case 'post/DECREMENT': {
            return { ...state, post: state.post - 1 };
        }
        case 'post/INCREMENT_BY': {
            return { ...state, post: state.post + action.payload };
        }
        case 'post/DECREMENT_BY': {
            return {...state, post: state.post - action.payload};
        }
        default: {
            return state;
        }
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.subscribe(() => {
    console.log(store.getState());
    postCount.innerText = store.getState().post;
})

postCount.innerText = store.getState().post;

store.dispatch({ type: 'post/DECREMENT' });
store.dispatch({ type: 'post/INCREMENT' });
store.dispatch({ type: 'post/INCREMENT_BY', payload: 15 });
store.dispatch({ type: 'post/DECREMENT_BY', payload: 5 });

postCount.addEventListener('click',() => {
    store.dispatch({type: 'post/INCREMENT'});
});