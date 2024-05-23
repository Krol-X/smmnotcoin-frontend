<script lang="ts">
  import { route, link, navigate } from '@state/navigate.ts'

	export let items = [
		{ text: 'Statistic', url: '/statistic', img: '#' },
		{ text: 'Refs', url: '/references', img: '#' },
		{ text: 'Coin', url: '/', img: '#' },
		{ text: 'Earn', url: '/tasks', img: '#' },
		{ text: 'Boost', url: '/boosts', img: '#' }
	]
  
  $: current_url = $route
</script>

<div class="navigation">
	{#each items as {text, url, img}}
		<button class="navigation__button" class:active={current_url == url} use:link={() => navigate(url)}>
			<img class="image" src={img} alt="">
			<div class="text">{text}</div>
		</button>
	{/each}
</div>

<style lang="scss">
	.navigation {
    width: 100%;
		height: 6rem;
		background: #202020;
		padding: 0.75rem;
		border-radius: 12px;

    display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 0.75rem;

    .navigation__button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 12px;
      color: inherit;
      background: rgba(0, 0, 0, 0.2);

      padding: 0.1rem;
      font-size: 0.7em;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.1rem;
      
      &.active {
        box-shadow: 0 0 10px 1px #d99e28;
      }

      .image {
        flex-grow: 1;
      }
    }
	}
</style>