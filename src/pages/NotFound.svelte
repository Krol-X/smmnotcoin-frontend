<script lang="ts">
  import { link } from '@state/navigate.ts'
</script>

<div class="container">
  <div class="text">404</div>
  <a href="/" class="link" use:link>Return to game</a>
</div>

<style lang="scss">
  .container {
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    .text {
      font-size: 4rem;
      font-weight: bold;
      color: #ffdc00;
    }
    .link {
      display: block;
      padding: 0.75rem;
      text-align: center;
      font-size: 1.5rem;
      border: thin solid white;
      border-radius: 16px;
      background: #555;
    }
  }
</style>
