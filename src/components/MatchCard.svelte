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
  
