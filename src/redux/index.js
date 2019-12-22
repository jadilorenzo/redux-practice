import { createStore } from 'redux'

const reducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count+1}
    case 'DECREMENT':
      return {...state, count: state.count-1}
    default:
      return state
  }
}

export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export default createStore(reducer)
