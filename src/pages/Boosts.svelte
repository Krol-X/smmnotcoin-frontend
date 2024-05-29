<script lang="ts">
  import Text from '@components/shared/Text.svelte'
  import List from '@components/shared/List.svelte'
  import Score from '@components/shared/Score.svelte'
  import Button from '@components/shared/Button.svelte'
  
  import { accountStore } from '@state/stores.ts'
</script>

<div class="container">
  <Text center="Boosts" />
  <Score store={accountStore} />
  <List />
  <Button text="Upgrade/Buy" />
</div>

<style lang="scss">
  .container {
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
