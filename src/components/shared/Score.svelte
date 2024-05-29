<script lang="ts">
  import { formatNumberWithPadding } from '@utils/math.ts'
  import { writable } from 'svelte/store'
  import type { Account } from '@state/types.ts'

  export let store: writable<Account> | null = null

  $: score = formatNumberWithPadding(store ? $store.balance : 0, 5)
  $: league = store ? $store.league : ''
</script>

<div class="league">
  <div class="score">
    {score}
  </div>
  <div class="name">
    {league}
  </div>
</div>

<style lang="scss">
  .league {
    padding-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    .score {
      font-size: 3rem;
    }
  }
</style>
