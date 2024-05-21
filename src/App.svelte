<script lang="ts">
  import MainPage from '@pages/Main.svelte'
  import FirstPage from '@pages/First.svelte'
  import SecondPage from '@pages/Second.svelte'

  import Router from './Router.svelte'
  import { link } from '@state/navigate.ts'
  import type { RouterConfig } from '@state/navigate.ts'

  const routes: RouterConfig = {
    '/': MainPage,
    '/first': FirstPage,
    '/second/:param': SecondPage
  }
</script>

<nav>
  <a href="/" use:link>Home page</a>
  <a href="/first" use:link>First page</a>
  <a href="/second/ok" use:link>Second page</a>
</nav>

<Router config={routes} />
