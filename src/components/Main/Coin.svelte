<script lang="ts">
  import { onMount } from 'svelte'

  export let size: number | string = '256px'
  export let ontap: ((event: MouseEvent | TouchEvent) => void) | null = null
  let pressed: boolean = false

  function onTap(over_coin: boolean) {
    if (pressed) {
      pressed = false
      if (over_coin && ontap) ontap()
    }
  }

  onMount(() => {
    const mouse_up = () => onTap(false)
    const touch_end = () => onTap(false)

    // Listen for mouse events
    document.addEventListener('mouseup', mouse_up)
    // Listen for touch events
    document.addEventListener('touchend', touch_end)
    document.addEventListener('touchcancel', touch_end)

    return () => {
      document.removeEventListener('mouseup', mouse_up)
      document.removeEventListener('touchend', touch_end)
      document.removeEventListener('touchcancel', touch_end)
    }
  })
</script>

<div class="coin-container" style="width: {size}; height: {size};">
  <button
    class="coin color-1"
    class:pressed
    on:mousedown={() => (pressed = true)}
    on:mouseup={() => onTap(true)}
    on:touchstart={() => (pressed = true)}
    on:touchend={() => onTap(true)}
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
