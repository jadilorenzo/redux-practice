import React from "react"
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import randomcolor from "randomcolor"
import HomePage from './pages/HomePage.jsx'
import AllNotes from './pages/AllNotes.jsx'

function App(props) {
    // const count = useSelector(state => state.count)
    // const dispatch = useDispatch()

    const color = randomcolor({luminosity: 'light'})
    return (
      <Router>
        <header style={{borderBottom: `3px solid ${color}`}}><h1 style={{color: color}}>Notes</h1></header>
        <div className='main'>
          <Switch>
            <Route path='/' exact>
              <HomePage color={color}/>
            </Route>
            <Route path='/all_notes' exact>
              <AllNotes/>
            </Route>
            <Route path='/read_note/:id' exact>
              <></>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default App
