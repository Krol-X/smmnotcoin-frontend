<script>
  import Text from '@components/_shared/Text.svelte'
  import List from '@components/_shared/List.svelte'
  import Score from '@components/_shared/Score.svelte'
  import Button from '@components/_shared/Button.svelte'
  
  import { accountStore } from '@state/stores.ts'
</script>

<div class="container">
  <Text center="Boosts" />
  <Score store={accountStore} />
  <List />
  <Button text="Upgrade/Buy" />
</div>

<style>
  .container {
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
