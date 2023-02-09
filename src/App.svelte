<script>
  import Header from './components/Header.svelte'
  import NotesGrid from './components/NotesGrid.svelte'
</script>

<Header />
<NotesGrid />

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
