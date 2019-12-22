import React from "react"
import './App.css'
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./redux/index"

function App(props) {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default App
