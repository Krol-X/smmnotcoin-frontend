<script lang="ts">
  import MainPage from '@pages/Main.svelte'
  import SquadPage from '@pages/Squad.svelte'
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
    '/squad': SquadPage,
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
    align-items: center;
    gap: 1rem;

    > * {
      max-width: 1024px;
    }

    main {
      width: 100%;
      height: 100%;
      flex-grow: 1;
    }
  }
</style>
