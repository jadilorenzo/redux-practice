import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {saveTitle, saveBody, saveNote} from "../redux/index"
import {Redirect} from 'react-router-dom'
import '../App.css'


const HomePage = (props) => {
  const dispatch = useDispatch()
  const redirect = useSelector(state => state.redirectToAllNotesPage)

  if (redirect) {
    return <Redirect to='/all_notes'/>
  }

  return (
    <div>
      <form>
        <input
          /*style={{borderColor: props.color}}*/
          onChange={(e) => dispatch(saveTitle(e.target.value.toUpperCase()))}/>
        <textarea
          /*style={{borderColor: props.color}}*/
          onChange={(e) => dispatch(saveBody(e.target.value))}/>

        <button
          style={{backgroundColor: props.color}}
          onClick={(e) => {
            e.preventDefault()
            dispatch(saveNote())
          }}
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default HomePage
