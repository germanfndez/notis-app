<script>
  import { createEventDispatcher } from 'svelte'
  import { fly } from 'svelte/transition'

  export let id
  export let title
  export let body
  export let color

  let deleting = false

  const dispatch = createEventDispatcher()

  function handleChange(event) {
    dispatch('edit', {
      id,
      title,
      body,
      color: event.target.id === 'color' ? true : color
    })
  }

  function handleDelete() {
    dispatch('delete', {
      id
    })
  }

  function handleDeletingMode() {
    deleting = !deleting
  }
</script>

<article style="background: {color};">
  <nav>
    <button on:click={handleChange} aria-label="Change note color">
      <svg
        id="color"
        fill="none"
        stroke="white"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    </button>

    <div>
      {#if deleting}
        <button
          transition:fly={{
            x: 50,
            duration: 300
          }}
          on:click={handleDelete}
          class="accept"
          aria-label="Delete note">
          <svg
            fill="none"
            stroke="white"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </button>

        <button
          transition:fly={{
            x: 50,
            duration: 300
          }}
          on:click={handleDeletingMode}
          class="decline"
          style="margin-right: 5px;"
          aria-label="Change delete mode">
          <svg
            fill="none"
            stroke="white"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      {/if}

      <button
        on:click={handleDeletingMode}
        class={deleting ? 'deleting' : 'delete'}
        aria-label="Change delete mode">
        <svg
          fill="none"
          stroke="white"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      </button>
    </div>
  </nav>
  <input
    type="text"
    on:change={handleChange}
    placeholder="Insert a title"
    bind:value={title} />
  <textarea
    on:change={handleChange}
    placeholder="Insert a body"
    bind:value={body} />
</article>

<style>
  article {
    box-sizing: border-box;
    max-width: 400px;
    height: 300px;
    width: 100%;
    border-radius: 6px;
    padding: 0 15px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }

  input {
    font-weight: bold;
    background: transparent;
    border: none;
    width: 100%;
    font-size: 1.2rem;
    outline: none;
    overflow-y: scroll;
  }

  input::placeholder {
    color: var(--color-gray);
  }

  textarea {
    font-family: Inter;
    margin-top: 8px;
    background: transparent;
    border: none;
    width: 100%;
    height: 65%;
    font-size: 1rem;
    outline: none;
    resize: none;
  }

  textarea::placeholder {
    color: var(--color-gray);
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  button > svg {
    width: 24px;
    height: 24px;
    stroke: var(--color-gray);
    transition: all 0.2s ease-in-out;
    stroke-width: 2;
  }

  @media (hover: hover) and (pointer: fine) {
    button > svg:hover {
      stroke: var(--color-blue);
    }

    button.delete > svg:hover {
      stroke: rgb(124, 26, 26);
    }

    button.accept > svg:hover {
      stroke: rgb(17, 102, 43);
    }

    button.decline > svg:hover {
      stroke: rgb(124, 26, 26);
    }
  }

  button.deleting > svg {
    stroke: var(--color-blue);
  }
</style>
