<script lang="ts">
	import CitySearch from '../../components/CitySearch.svelte';
	import WeatherCard from '../../components/WeatherCard.svelte';
	import ErrorMessage from '../../components/ErrorMessage.svelte';

	type WeatherData = {
		name: string;
		main: {
			temp: number;
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

<div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4 py-12">
	<h1 class="text-4xl font-bold mb-6 text-blue-800 text-center">Cricket Weather App</h1>

	<CitySearch on:search={(e) => fetchWeather(e.detail.city)} />

	{#if isLoading}
		<p class="text-center text-blue-600 mt-4">Loading...</p>
	{/if}
	{#if error}
		<ErrorMessage message={error} />
	{/if}
	{#if weather}
		<WeatherCard weatherData={weather} />
	{/if}
</div>


