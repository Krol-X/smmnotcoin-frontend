<script lang="ts">
  import Text from '@components/shared/Text.svelte'
  import List from '@components/shared/List.svelte'
  import Button from '@components/shared/Button.svelte'

  let squad_name = null
  let squad_count = null
</script>

<div class="container">
  {#if squad_name}
    <Text left={squad_name} right={squad_count} />
  {:else}
    <Text center={'Available squads'} />
  {/if}
  <List />
  <Button text={squad_name ? 'Leave' : 'Join'} />
</div>

<style lang="scss">
  .container {
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
