<script lang="ts">
  import MainPage from '@pages/Main.svelte'
  import SquadPage from '@pages/Squad.svelte'
  import StatisticPage from '@pages/Statistic.svelte'
  import ReferralsPage from '@pages/Referrals.svelte'
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
    '/referrals': ReferralsPage,
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
    width: 100%;
    height: 100%;
    max-width: 1024px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    main {
      width: 100%;
      height: 100%;
      flex-grow: 1;
    }
  }
</style>
