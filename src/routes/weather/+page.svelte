<script lang="ts">
	import CitySearch from '../../components/CitySearch.svelte';
	import WeatherCard from '../../components/WeatherCard.svelte';
	import ErrorMessage from '../../components/ErrorMessage.svelte';
	
	type WeatherData = {
		name: string;
		main: {
			temp: number;
			feels_like: number;
			humidity: number;
		};
		weather: { description: string; icon: string }[];
		wind: { speed: number };
	};

	let weather: WeatherData | null = null;
	let error = '';
	let isLoading = false;

	async function fetchWeather(city: string) {
		if (!city.trim()) return;

		try {
			error = '';
			isLoading = true;
			const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
			if (!res.ok) throw new Error('City not found');
			weather = await res.json();
		} catch (err) {
			const errorObj = err as Error;
			error = errorObj.message;
			weather = null;
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="container">
	<div class="content-wrapper">
		<h1>Weather Updates</h1>

		<p class="description">
			Enter any city to get the current weather details including temperature, humidity,
			wind speed, and sky conditions. This can help you plan for upcoming cricket matches 
			or just stay informed about local conditions.
		</p>

		<CitySearch on:search={(e) => fetchWeather(e.detail.city)} />

		{#if isLoading}
			<p class="loading">Loading...</p>
		{/if}

		{#if error}
			<ErrorMessage message={error} />
		{/if}

		{#if weather}
			<WeatherCard weatherData={weather} />
		{/if}
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
		background-color: #f5f5f5;
		margin: 0;
		padding: 0;
	}

	.container {
		min-height: 20vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%);
		padding: 3rem 1rem;
	}

	.content-wrapper {
		max-width: 700px;
		width: 100%;
		text-align: center;
	}

	h1 {
		font-size: 3.25rem;
		font-weight: 900;
		color: #0b8043; /* Deep cricket green */
		margin-bottom: 0.5rem;
		text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.07);
		letter-spacing: 1.1px;
	}

	.description {
		font-size: 1.3rem;
		color: #2e7d32;
		margin-bottom: 1.75rem;
		font-weight: 600;
		line-height: 1.5;
	}

	.loading {
		color: #0b8043;
		font-weight: 700;
		margin-top: 1rem;
		animation: pulse 2s infinite ease-in-out;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}

	@media (max-width: 640px) {
		h1 {
			font-size: 2.25rem;
		}

		.description {
			font-size: 1.1rem;
			padding: 0 1rem;
		}
	}
</style>
