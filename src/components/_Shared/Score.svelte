<script>
  import { formatNumberWithPadding } from '@utils/math.ts'

  export let score_store = null
  export let name = 'Bronze'

  $: score = formatNumberWithPadding(score_store ? $score_store : 0, 5)
</script>

<div class="league">
  <div class="score">
    {score}
  </div>
  <div class="name">
    {name}
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
