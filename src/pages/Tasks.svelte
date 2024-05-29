<script lang="ts">
  import Text from '@components/_shared/Text.svelte'
  import List from '@components/_shared/List.svelte'
</script>

<div class="container">
  <Text center="Earn" />
  <List />
</div>

<style lang="scss">
  .container {
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
