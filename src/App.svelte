<script lang="ts">
  import HomePage from '@pages/Home.svelte'
  import FirstPage from '@pages/First.svelte'
  import SecondPage from '@pages/Second.svelte'

  import Router from './Router.svelte'
  import { link } from '@state/navigate.ts'
  import type { RouterConfig } from '@state/navigate.ts'

  const routes: RouterConfig = {
    '/': HomePage,
    '/first': FirstPage,
    '/second': SecondPage
  }
</script>

<nav>
  <a href="/" use:link>Home page</a>
  <a href="/first" use:link>First page</a>
  <a href="/second" use:link>Second page</a>
</nav>

<Router config={routes} />
