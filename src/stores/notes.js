import { get, writable } from 'svelte/store'
import { getRandomColor } from '../utils/getRandomColor.js'

export const notes = writable(JSON.parse(localStorage.getItem('notes')) || [])
export const filteredNotes = writable(get(notes))

export function newNote() {
  const note = {
    id: Math.random(),
    title: '',
    body: '',
    color: getRandomColor()
  }

  notes.update(notes => [note, ...notes])
}

export function editNote(data) {
  const { id, title, body, color } = data

  notes.update(notes => {
    const noteIndex = notes.findIndex(note => note.id === id)
    notes[noteIndex] = {
      id,
      title,
      body,
      color: color === true ? getRandomColor() : color
    }

    return notes
  })
}

export function deleteNote(id) {
  notes.update(notes => notes.filter(note => note.id !== id))
}

export function filterNotes(query) {
  if (query === '') {
    console.log('empty')
    filteredNotes.set(get(notes))
    return
  }

  filteredNotes.update(_ => {
    return get(notes).filter(
      note => note.title.includes(query) || note.body.includes(query)
    )
  })
}
