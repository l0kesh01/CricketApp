<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { page } from '$app/stores'; // still used internally, not reactive
	let currentPath = '';

	onMount(() => {
		currentPath = get(page).url.pathname;

		const unsubscribe = afterNavigate(() => {
			currentPath = get(page).url.pathname;
		});

		return unsubscribe;
	});

	function isActive(path: string) {
		return currentPath === path || currentPath.startsWith(path + '/');
	}
</script>

<nav class="navbar">
	<ul>
		<li class={isActive('/') ? 'active' : ''}>
			<a href="/">Home</a>
		</li>
		<li class={isActive('/weather') ? 'active' : ''}>
			<a href="/weather">Weather</a>
		</li>
		<li class={isActive('/matches') ? 'active' : ''}>
			<a href="/matches">Matches</a>
		</li>
	</ul>
</nav>

<style>
	.navbar {
		background-color: #1a1a1a; /* Dark gray for Cricbuzz-like feel */
		padding: 1rem 2rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		border-bottom: 2px solid #0b8043; /* Cricbuzz green accent */
	}

	.navbar ul {
		list-style: none;
		display: flex;
		gap: 2rem;
		margin: 0;
		padding: 0;
	}

	.navbar li {
		position: relative;
	}

	.navbar li a {
		color: #f1f1f1;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.05rem;
		padding: 0.5rem 0;
		display: inline-block;
		transition: color 0.3s ease;
	}

	.navbar li.active a {
		color: #0b8043; /* Cricbuzz green for active */
		border-bottom: 3px solid #0b8043;
	}

	.navbar li a:hover {
		color: #66bb6a; /* Light green hover */
	}

	@media (max-width: 600px) {
		.navbar ul {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
	}
</style>

