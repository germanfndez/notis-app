<script>
  import Note from "./Note.svelte";
  import NoteCreate from "./NoteCreate.svelte";
  export let notes;
</script>

<section>
  <NoteCreate on:click/>
  {#each notes as {title, body, color, id} (id)}
    <Note {id} {title} {body} {color} on:edit on:delete/>
  {/each}
</section>

<style>
  section {
    padding: 20px 20px;
    display: grid;
    justify-items: center;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }

</style>