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
  
  <style>
  div.flex.justify-center {
    margin: 1rem auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  div.bg-white {
    background-color: #ffffff;
    border: 1px solid #cfe2f3; /* soft blue border */
    border-radius: 14px;
    box-shadow: 0 6px 14px rgba(18, 52, 86, 0.1);
    padding: 1.2rem 1.8rem;
    max-width: 420px;
    color: #1c3d5a; /* deep navy text */
    transition: box-shadow 0.3s ease;
  }

  div.bg-white:hover {
    box-shadow: 0 10px 20px rgba(18, 52, 86, 0.18);
  }

  div.w-24.h-24 {
    background: #e3f0fd; /* very light blue */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 80px;
    height: 80px;
  }

  h3 {
    font-weight: 700;
    font-size: 1.4rem;
    color: #00529b; /* bright blue accent */
    margin-bottom: 0.3rem;
  }

  p {
    margin: 0.2rem 0;
    font-size: 0.9rem;
    color: #4a6ea9;
  }

  p.capitalize {
    text-transform: capitalize;
    color: #163e72; /* slightly darker blue */
  }

  p.text-sm {
    color: #4a6ea9;
  }
</style>
