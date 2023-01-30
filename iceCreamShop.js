const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_ICECREAM = 'BUY_ICECREAM'

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: "Buy Icecream Action"
    }
}

const intialState = {
    numberOfIcecream : 15
}

const reducer = (state = intialState, action) => {
    switch (action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIcecream : state.numberOfIcecream -1
            }
        default: return state
    }
}

const store = createStore(reducer, applyMiddleware(logger))
console.log('Initial State ', store.getState())

const unsubscribe = store.subscribe(()=> {})
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()