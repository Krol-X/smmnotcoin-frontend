<script lang="ts">
  import NotFoundLayout from '@layouts/NotFound.svelte'
  import { route } from '@state/navigate.ts'
  import type { RouterConfig } from '@state/navigate.ts'

  export let config: RouterConfig = {}

  $: current_path = $route
  $: current_component = config[current_path] || NotFoundLayout
</script>

<main>
  <svelte:component this={current_component} />
</main>
