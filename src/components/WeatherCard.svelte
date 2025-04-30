<script lang="ts">
	export let weatherData: {
		name: string;
		main: {
			temp: number;
			humidity: number;
		};
		weather: { description: string; icon: string }[];
		wind: { speed: number };
	};
</script>

<div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg border border-blue-200 flex items-center space-x-6">
	<!-- Weather Icon -->
	<img
		src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
		alt="Weather icon"
		class="w-24 h-24"
	/>

	<!-- Weather Details -->
	<div class="flex-1">
		<h2 class="text-2xl font-semibold text-blue-800 mb-2">{weatherData.name}</h2>
		<p class="text-lg text-gray-700 capitalize">Condition: {weatherData.weather[0].description}</p>
		<p class="text-gray-600">Temperature: {weatherData.main.temp}°C</p>
		<p class="text-gray-600">Humidity: {weatherData.main.humidity}%</p>
		<p class="text-gray-600">Wind Speed: {weatherData.wind.speed} m/s</p>
	</div>
</div>
