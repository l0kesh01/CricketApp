<script lang="ts">
	export let match: {
	  seriesName: string;
	  team1: string;
	  team2: string;
	  venue: string;
	  city: string;
	  startTime: Date;
	  status: string;
	  team1Score: string;
	  team2Score: string;
	};
  </script>
  
  <div class="bg-white shadow-lg rounded-xl p-6 mb-6 w-full max-w-2xl border border-gray-200 mx-auto">
	<h3 class="text-lg font-semibold text-blue-800 mb-1">{match.seriesName}</h3>
	<p class="text-md text-gray-700 font-medium">{match.team1} vs {match.team2}</p>
	<p class="text-sm text-gray-600">🏟️ Venue: {match.venue} ({match.city})</p>
	<p class="text-sm text-gray-600">🕒 Start: {match.startTime.toLocaleString()}</p>
	<p class="text-sm text-green-700 font-semibold">Status: {match.status}</p>
  
	{#if match.team1Score}
	  <p class="text-sm mt-2 text-gray-700">{match.team1}: {match.team1Score}</p>
	{/if}
	{#if match.team2Score}
	  <p class="text-sm text-gray-700">{match.team2}: {match.team2Score}</p>
	{/if}
  </div>
  
  <style>
  div {
    background: #ffffff;
    border: 1px solid #cfe2f3; /* soft blue border */
    border-radius: 14px;
    box-shadow: 0 6px 12px rgba(18, 52, 86, 0.1);
    padding: 1.5rem 2rem;
    max-width: 600px;
    margin: 1rem auto 1.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #1c3d5a; /* deep navy text */
    transition: box-shadow 0.3s ease;
  }

  div:hover {
    box-shadow: 0 10px 18px rgba(18, 52, 86, 0.18);
  }

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    color: #00529b; /* bright blue accent */
    margin-bottom: 0.3rem;
  }

  p {
    margin: 0.2rem 0;
    font-size: 0.9rem;
  }

  p.text-md {
    font-weight: 600;
    color: #163e72; /* slightly darker blue */
  }

  p.text-sm {
    color: #4a6ea9;
  }

  p.text-green-700 {
    color: #2c974b; /* rich green for status */
    font-weight: 700;
    margin-top: 0.4rem;
  }
</style>
