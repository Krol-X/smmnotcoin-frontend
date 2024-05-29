<script lang="ts">
  export let left = ''
  export let center = ''
  export let right = ''
</script>

<div class="text">
  <div>{left}</div>
  <div class="center">{center}</div>
  <div class="right">{right}</div>
</div>

<style lang="scss">
  .text {
    display: flex;

    div {
      flex-grow: 1;
    }
    .center {
      text-align: center;
    }
    .right {
      text-align: right;
    }
  }
</style>
