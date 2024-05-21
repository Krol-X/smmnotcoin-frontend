<script lang="ts">
  import { link, navigate } from '@state/navigate.ts'

	export let items = [
		{ text: 'Statistic', url: '/statistic', img: '#' },
		{ text: 'Refs', url: '/references', img: '#' },
		{ text: 'Coin', url: '/', img: '#' },
		{ text: 'Earn', url: '/tasks', img: '#' },
		{ text: 'Boost', url: '/boosts', img: '#' }
	]
</script>

<div class="navigation">
	{#each items as {text, url, img}}
		<button class="navigation__button" use:link={() => navigate(url)}>
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

      font-size: 0.7em;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.1rem;

      .image {
        flex-grow: 1;
      }
    }
	}
</style>