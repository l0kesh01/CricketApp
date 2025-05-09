<script lang="ts">
	export let weatherData: {
	  name: string;
	  main: {
		temp: number;
		feels_like: number;
		humidity: number;
	  };
	  weather: { description: string; icon: string }[];
	  wind: { speed: number };
	};
  </script>
  
  <div class="flex justify-center">
	<div class="flex items-center bg-white shadow-lg rounded-xl p-4 w-full max-w-md border border-gray-200">
	  
	  <div class="w-24 h-24 flex-shrink-0 flex items-center justify-center">
		<img
		  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
		  alt={weatherData.weather[0].description}
		  class="w-20 h-20"
		/>
	  </div>
  
	  
	  <div class="ml-4">
		<h3 class="text-xl font-bold text-blue-800">{weatherData.name}</h3>
		<p class="text-gray-700 capitalize">{weatherData.weather[0].description}</p>
		<p class="text-sm text-gray-600">Temp: {weatherData.main.temp}°C (Feels like: {weatherData.main.feels_like}°C)</p>
		<p class="text-sm text-gray-600">Humidity: {weatherData.main.humidity}%</p>
		<p class="text-sm text-gray-600">Wind Speed: {weatherData.wind.speed} m/s</p>
	  </div>
	</div>
  </div>
  
