<script lang="ts">
	export let venue: {
	  name: string;
	  city: string;
	  country: string;
	  capacity: number;
	  description: string;
	};
  </script>
  
  <div class="bg-white border rounded-xl shadow-md p-6 w-full md:w-[400px] mx-auto md:mx-0">
	<h2 class="text-xl font-bold text-blue-800 mb-2">{venue.name}</h2>
	<p class="text-sm text-gray-700 mb-1"><strong>City:</strong> {venue.city}</p>
	<p class="text-sm text-gray-700 mb-1"><strong>Country:</strong> {venue.country}</p>
	<p class="text-sm text-gray-700 mb-1"><strong>Capacity:</strong> {venue.capacity.toLocaleString()}</p>
	<p class="text-sm text-gray-600 mt-3">{venue.description}</p>
  </div>

  <style>
  div {
    background: #ffffff;
    border: 1px solid #d1e7dd; /* subtle greenish border like Cricbuzz */
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #23475e; /* deep blue-green text color */
  }

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
    color: #0b5c86; /* dark blue accent */
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
    color: #3a5a70;
  }

  p strong {
    color: #0b5c86; /* highlight labels with accent color */
  }

  p:last-child {
    margin-top: 1rem;
    color: #576f85;
    line-height: 1.4;
  }
</style>

  