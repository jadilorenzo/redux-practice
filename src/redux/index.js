import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import CustomApi from '../api/CustomApi'
import {v4} from 'uuid'
const api = new CustomApi()

const initialState = {
  redirectToAllNotesPage: false,
  redirectToReadNote: false,
  title: '',
  body: '',
  notes: [],
  selectedId: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_NOTE_TITLE':
      return {...state, title: action.payload}
    case 'SAVE_NOTE_BODY':
      return {...state, body: action.payload}
    case 'SAVE_NOTE':
      return {...state, notes: action.payload, redirectToAllNotesPage: true}
    case 'GET_NOTES':
      return {...state, notes: action.payload}
    case 'NOTE_SELECTED':
      return {...state, redirectToReadNote: true, selectedId: action.payload}
    default:
      return state
  }
}

export const saveTitle = (payload) => {
  return (dispatch, getState) => {
    dispatch({type: "SAVE_NOTE_TITLE", payload})
  }
}

export const saveBody = (payload) => {
  return (dispatch, getState) => {
    dispatch({type: "SAVE_NOTE_BODY", payload})
  }
}

export const saveNote = () => {
  return async (dispatch, getState) => {
    const notes = await api.getNotes()
    api.postNotes([...notes, {id: v4(), title: getState().title, body: getState().body}])
    dispatch({type: "SAVE_NOTE", payload: await api.getNotes()})
  }
}

export const getNotes = () => {
  return async (dispatch, getState) => {
    if (getState().notes.length === [].length) {
      const notes = await api.getNotes()
      dispatch({
        type: "GET_NOTES",
        payload: notes
      })
    }
  }
}

export const noteSelected = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "NOTE_SELECTED", payload: id })
  }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))

export default store
