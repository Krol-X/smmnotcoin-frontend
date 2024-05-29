<script lang="ts">
  import Squad from '@components/Main/Squad.svelte'
  import Score from '@components/_shared/Score.svelte'
  import Coin from '@components/Main/Coin.svelte'
  import Energy from '@components/Main/Energy.svelte'

  function onCoinClick() {}
</script>

<div class="container">
  <Squad />
  <Score />
  <div class="coin-place">
    <Coin onclick={onCoinClick} />
  </div>
  <Energy />
</div>

<style lang="scss">
  .container {
    height: 100%;

    display: flex;
    flex-direction: column;

    .coin-place {
      flex-grow: 1;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
