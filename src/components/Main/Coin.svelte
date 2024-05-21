<script lang="ts">
  import { onMount } from 'svelte'

  export let size: number = '256px'
  export let onclick: (event: MouseEvent) => void | null = null
  let pressed: boolean = false

  function onMouseUp(over_coin) {
    if (pressed) {
      pressed = false
      if (over_coin) onclick()
    }
  }

  onMount(() => {
    const mouse_up = (event) => onMouseUp()
    document.addEventListener('mouseup', mouse_up)
    return () => {
      document.removeEventListener('mouseup', mouse_up)
    }
  })
</script>

<div class="coin-container" style="width: {size}; height: {size};">
  <button
    class="coin color-1"
    class:pressed
    on:mousedown={() => (pressed = true)}
    on:mouseup={() => onMouseUp(true)}
  >
    <div class="coin-inner"></div>
  </button>
</div>

<style lang="scss">
  .coin-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .coin {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #ffdc00;
      border: thin solid #d99e28;

      display: flex;
      justify-content: center;
      align-items: center;

      &.pressed:hover {
        width: 95%;
        height: 95%;
      }

      .coin-inner {
        width: 80%;
        height: 80%;
        border-radius: 50%;
        background: linear-gradient(to right, #fdd90a, #fea801);
        border: 2px solid #e29b00;
      }
    }
  }

  .coin.color-1 {
    box-shadow:
      -4px 4px 2px 0px #e29b00,
      0 0 100px 20px #d99e28;
  }
  .coin.color-2 {
    box-shadow:
      -4px 4px 2px 0px #e29b00,
      0 0 100px 20px #7890c8;
  }
</style>
