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
  <div class="coin-light color-1"></div>
  <img
    class="coin"
    class:pressed
    on:mousedown={() => (pressed = true)}
    on:mouseup={() => onTap(true)}
    on:touchstart={() => (pressed = true)}
    on:touchend={() => onTap(true)}
    src="/images/coin1.png"
    alt="Coin"
    draggable="false"
  >
</div>

<style lang="scss">
  .coin-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: relative;

    .coin-light {
      z-index: 5;
      position: absolute;
      width: 90%;
      height: 90%;
      border-radius: 50%;
    }

    .coin {
      z-index: 10;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      &.pressed:hover {
        width: 95%;
        height: 95%;
      }
    }
  }

  .color-1 {
    box-shadow:
      /*-4px 4px 2px 0px #e29b00,*/
      0 0 100px 20px #d99e28;
    /*filter: drop-shadow(0px 0px 10px #d99e28);*/
  }
  .color-2 {
    box-shadow:
      -4px 4px 2px 0px #e29b00,
      0 0 100px 20px #7890c8;
  }
</style>
