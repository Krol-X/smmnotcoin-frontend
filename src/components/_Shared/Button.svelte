<script lang="ts">
  export let text = ''
  export let click = () => {}
</script>

<button on:click={click}>
  {text}
</button>

<style lang="scss">
  button {
    padding: 1rem;
    color: white;
    background: none;
    border: 2px solid #888;
  }
</style>
