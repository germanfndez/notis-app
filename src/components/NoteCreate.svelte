<button on:click aria-label="Create new note">
  <svg
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
</button>

<style>
  button {
    padding: 0;
    margin: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: dotted 4px rgb(160, 160, 160);
    max-width: 400px;
    height: 300px;
    width: 100%;
    border-radius: 6px;
    color: rgb(116, 115, 115);
    transition: all 0.2s ease-in-out;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover {
      background-color: rgb(196, 214, 247);
      border: dotted 4px rgb(34, 104, 235);
      color: rgb(34, 104, 235);
    }
  }

  button > svg {
    width: 80px;
    height: 80px;
  }
</style>
