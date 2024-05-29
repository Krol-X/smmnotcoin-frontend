<script lang="ts">
  export let text = ''
  export let click = () => {}
</script>

<button on:click={click}>
  {text}
</button>

<style lang="scss">
  button {
    padding: 0;
    height: 4rem;
    color: white;
    background: #ff9800;
    border: none;
    
    &:hover {
      background: #ff7100;
    }
  }
</style>
