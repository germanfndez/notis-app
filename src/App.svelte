<script>
  import AsideMenu from './components/AsideMenu.svelte'
  import NotesSection from './components/NotesSection.svelte'
</script>

<main
  class="min-h-screen grid md:grid-cols-[minmax(300px,_1fr)_3fr] p-6  gap-8 text-tertiary">
  <AsideMenu />
  <NotesSection />
</main>
