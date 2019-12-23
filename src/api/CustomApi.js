const postJSON = (url, jsonBody) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(jsonBody),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.json());

export default class CustomApi {
  getNotes() {
    return fetch(`http://localhost:3001/api`)
      .then((response) => response.json())
      .then((r) => {
        const notes = r.notes
        console.log('api', r)
        return notes;
      })
  }

  postNotes(notes) {
    return postJSON(`http://localhost:3001/api`, {notes: notes})
      .then((r) => {
        console.log('api', r)
        return r;
      })
  }
}
