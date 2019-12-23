import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getNotes, noteSelected} from "../redux/index"
import {Redirect} from 'react-router-dom'
import '../App.css'

const AllNotes = () => {
  const {notes, redirectToReadNote, selectedId} = useSelector(state => state)
  const dispatch = useDispatch()
  dispatch(getNotes())

  const handleItemClick = (id) => {
    dispatch(noteSelected(id))
  }

  const displayNotes = notes.map((note) =>
    <div
      className='item'
      key={note.id}
      onClick={() => handleItemClick(note.id)}
    >
      {note.title}
    </div>
  )

  if (redirectToReadNote) {
    return (
      <Redirect to={`read_note/${selectedId}`}/>
    )
  }

  return (
    <div>
      {displayNotes}
    </div>
  )
}
export default AllNotes
