<script>
  import Header from './components/Header.svelte'
  import NotesGrid from './components/NotesGrid.svelte'
  import { getRandomColor } from './utils/getRandomColor.js'

  let notes = JSON.parse(localStorage.getItem('notes')) || []
  let filteredNotes = notes

  function handleNew() {
    const newNote = {
      id: Math.random(),
      title: '',
      body: '',
      color: getRandomColor()
    }
    notes = [newNote, ...notes]
  }

  function handleEdit(event) {
    const { id, title, body, color } = event.detail

    const noteIndex = notes.findIndex((note) => note.id === id)
    notes[noteIndex] = {
      id,
      title,
      body,
      color: color === true ? getRandomColor() : color
    }
  }

  function handleDelete(event) {
    const { id } = event.detail
    notes = notes.filter((note) => note.id !== id)
  }

  function handleSearch(event) {
    const { query } = event.detail

    if (query === '') {
      filteredNotes = notes
      return
    }
    filteredNotes = notes.filter(
      (note) => note.title.includes(query) || note.body.includes(query)
    )
  }

  $: localStorage.setItem('notes', JSON.stringify(notes))
  $: filteredNotes = notes
</script>

<Header on:search={handleSearch} />
<NotesGrid
  notes={filteredNotes}
  on:click={handleNew}
  on:edit={handleEdit}
  on:delete={handleDelete} />

<style>
  :global(:root) {
    --color-blue: #2268eb;
    --color-gray: #6b6868;

    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(::selection) {
    background: var(--color-blue);
    color: #fff;
  }
</style>
