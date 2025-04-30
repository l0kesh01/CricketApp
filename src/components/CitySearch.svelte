<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let city = '';

	function handleSearch() {
		if (city.trim()) {
			dispatch('search', { city });
			city = '';
		}
	}
</script>

<div class="search-container">
	<form
		on:submit|preventDefault={handleSearch}
		class="search-form"
	>
		<input
			type="text"
			placeholder="Enter city"
			bind:value={city}
			class="search-input"
		/>
		<button
			type="submit"
			class="search-button"
		>
			Search
		</button>
	</form>
</div>

<style>
	.search-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 20vh;
		background: linear-gradient(to bottom right, #e6f4ea, #ffffff);
	}

	.search-form {
		display: flex;
		gap: 1rem;
		background-color: #ffffff;
		padding: 2rem;
		border-radius: 1rem;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 600px;
	}

	.search-input {
		flex: 1;
		padding: 1rem 1.25rem;
		font-size: 1.25rem;
		border: 2px solid #a7d7c5;
		border-radius: 0.75rem;
		background-color: #f8fff9;
		color: #2e7d32;
		outline: none;
		transition: border-color 0.3s, box-shadow 0.3s;
	}

	.search-input::placeholder {
		color: #81c784;
	}

	.search-input:focus {
		border-color: #43a047;
		box-shadow: 0 0 0 4px rgba(67, 160, 71, 0.2);
	}

	.search-button {
		padding: 1rem 2rem;
		font-size: 1.25rem;
		background-color: #388e3c;
		color: white;
		border: none;
		border-radius: 0.75rem;
		cursor: pointer;
		transition: background-color 0.3s, box-shadow 0.3s;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.search-button:hover {
		background-color: #2e7d32;
	}

	:global(body) {
		margin: 0;
		font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
		background-color: #f0fdf4;
	}
</style>
