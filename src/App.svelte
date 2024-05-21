<script lang="ts">
  import MainPage from '@pages/Main.svelte'
  import StatisticPage from '@pages/Statistic.svelte'
  import ReferencesPage from '@pages/References.svelte'
  import TasksPage from '@pages/Tasks.svelte'
  import TaskPage from '@pages/Task.svelte'
  import BoostsPage from '@pages/Boosts.svelte'

  import Router from './Router.svelte'
  import type { RouterConfig } from '@state/navigate.ts'
  
  import Navigation from '@components/Navigation.svelte'

  const routes: RouterConfig = {
    '/': MainPage,
    '/statistic': StatisticPage,
    '/references': ReferencesPage,
    '/tasks': TasksPage,
    '/task/:id': TaskPage,
    '/boosts': BoostsPage
  }
</script>

<div class="container">
  <main>
    <Router config={routes} />
  </main>
  <Navigation />
</div>

<style lang="scss">
  .container {
    height: 100%;
    color: white;
    background: black;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    main {
      flex-grow: 1;
    }
  }
</style>
