<script lang="ts">
  import Text from '@components/shared/Text.svelte'
  import List from '@components/shared/List.svelte'
</script>

<div class="container">
  <Text center="Referrals" />
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
