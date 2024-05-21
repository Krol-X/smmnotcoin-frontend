<script lang="ts">
  import { writable } from 'svelte/store'

  export let avatar_src: string =
    'https://habrastorage.org/getpro/habr/company/23c/305/c32/23c305c329e1945b36059400e50880b1.jpg'
  export let name: string = 'Squad name'
  export let squad_score_store: writable<number> = null
  export let top: number = 0

  $: score = squad_score_store ? $squad_score_store : 0
</script>

<div class="squad">
  <img class="avatar" src={avatar_src} alt="avatar" />
  <div class="info">
    <div class="name">{name}</div>
    <div class="score">{score}</div>
  </div>
  <div class="top">
    Top: {top}
  </div>
</div>

<style lang="scss">
  .squad {
    height: 4rem;
    background: #202020;
    padding: 0.75rem;
    border-radius: 12px;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    .avatar {
      height: 100%;
      width: auto;
      border-radius: 8px;
    }
    .info {
      flex-grow: 1;
    }
  }
</style>
