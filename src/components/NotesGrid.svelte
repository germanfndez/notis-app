<script>
  import { filteredNotes, notes } from '../stores/notes.js'
  import Note from './Note.svelte'
  import NoteCreate from './NoteCreate.svelte'

  $: localStorage.setItem('notes', JSON.stringify($notes))
  $: $filteredNotes = $notes
</script>

<section>
  <NoteCreate on:click />
  {#each $filteredNotes as { title, body, color, id } (id)}
    <Note {id} {title} {body} {color} />
  {/each}
</section>

<style>
  section {
    padding: 20px 20px;
    display: grid;
    justify-items: center;
    gap: 20px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 350px));
  }
</style>
