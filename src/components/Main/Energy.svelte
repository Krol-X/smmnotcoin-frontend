<script lang="ts">
  import type { Account } from '@state/types.ts'

  export let store: writable<Account> | null = null

  $: value = store ? $store.energy : ''
  $: max_value = store ? $store.max_energy : ''
</script>

<div class="energy">
  <img class="icon" src="/images/energy.png" alt="Energy" />
  <div class="info">
    <div class="value">{value}</div>
    <div class="max-value">/ {max_value}</div>
  </div>
</div>

<style lang="scss">
  .energy {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    height: 3rem;
    font-weight: bold;

    .icon {
      height: 100%;
    }
    .info {
      max-height: 100%;
      .value {
        font-size: 1.6rem;
      }
      .max-value {
        font-size: 1.25rem;
        color: #858482;
      }
    }
  }
</style>
