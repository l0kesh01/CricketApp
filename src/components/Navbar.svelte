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
	background-color: #333;
	padding: 1rem;
}
.navbar ul {
	list-style: none;
	display: flex;
	gap: 1rem;
}
.navbar li a {
	color: white;
	text-decoration: none;
	font-weight: bold;
}
.navbar li.active a {
	color: #e3df21; 
}
.navbar li a:hover {
	color: #ffc107; 
}

</style>
