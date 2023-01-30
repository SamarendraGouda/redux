const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE = 'BUY_CAKE'


function buyCake() {
    return {
        type: BUY_CAKE,
        info: "Redux action to Buy Cake"
    }
}


const intialState = {
    nummberOfCakes: 10
}


const reducer = (state = intialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                nummberOfCakes: state.nummberOfCakes - 1
            }
        default : return state
    }
}

const store = createStore(reducer, applyMiddleware(logger))
console.log('Initial State ', store.getState())

const unsubscribe = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()