<script lang="ts">
	import CitySearch from '../../components/CitySearch.svelte';
	import VenueInfo from '../../components/VenueInfo.svelte';
	import WeatherCard from '../../components/WeatherCard.svelte';
	import MatchCard from '../../components/MatchCard.svelte';
	import ErrorMessage from '../../components/ErrorMessage.svelte';
	import venues from '$lib/data/venues.json';

	type Venue = {
		name: string;
		city: string;
		country: string;
		capacity: number;
		description: string;
	};

	type Match = {
		id: number;
		startTime: Date;
		venue: string;
		city: string;
		status: string;
		seriesName: string;
		team1: string;
		team2: string;
		team1Score: string;
		team2Score: string;
	};

	let selectedVenue: Venue | null = null;
	let weather: any = null;
	let matches: Match[] = [];
	let error: string = '';
	let isLoading: boolean = false;

	async function handleSearch(event: CustomEvent<{ city: string }>) {
		const city = event.detail.city.trim().toLowerCase();
		if (!city) return;

		const venue = venues.find((v) => v.city.toLowerCase().includes(city));
		if (!venue) {
			error = `No venue found in "${city}"`;
			selectedVenue = null;
			weather = null;
			matches = [];
			return;
		}

		error = '';
		selectedVenue = venue;

		await Promise.all([fetchWeather(venue.city), fetchMatches(venue.name)]);
	}

	async function fetchWeather(city: string) {
		try {
			isLoading = true;
			const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
			if (!res.ok) throw new Error('Failed to fetch weather');
			weather = await res.json();
		} catch (err) {
			error = 'Could not load weather info.';
			console.error(err);
			weather = null;
		} finally {
			isLoading = false;
		}
	}

	async function fetchMatches(venueName: string) {
		try {
			const res = await fetch('/api/cricket');
			const result = await res.json();

			console.log("🔍 FULL MATCH DATA DUMP:", result);

			const allMatches = result.typeMatches
				.flatMap((typeBlock: any) =>
					typeBlock.seriesMatches
						.filter((seriesBlock: any) => seriesBlock.seriesAdWrapper && seriesBlock.seriesAdWrapper.matches)
						.flatMap((seriesBlock: any) =>
							seriesBlock.seriesAdWrapper.matches.map((m: any) => ({
								matchInfo: m.matchInfo,
								venueInfo: m.matchInfo.venueInfo,
								matchScore: m.matchScore
							}))
						)
				);

			console.log("📦 All matches flattened:", allMatches);

			const now = new Date();
			const twoDaysAgo = new Date(now);
			twoDaysAgo.setDate(now.getDate() - 2);
			const fiveDaysLater = new Date(now);
			fiveDaysLater.setDate(now.getDate() + 5);

			matches = allMatches
				.filter((m: any) => {
					const venue = (m.venueInfo?.ground || '').toLowerCase();
					const city = (m.venueInfo?.city || '').toLowerCase();
					const search = venueName.toLowerCase();

					const venueMatch = venue.includes(search) || city.includes(search);

					const matchTime = new Date(parseInt(m.matchInfo.startDate));
					const status = m.matchInfo.state?.toLowerCase() || '';

					const isFinishedRecently = status === 'complete' && matchTime >= twoDaysAgo && matchTime <= now;
					const isUpcoming = status === 'upcoming' && matchTime >= now && matchTime <= fiveDaysLater;
					const isLive = status === 'inprogress' || status.includes('live');

					console.log(`🎯 VenueMatch: ${venueMatch}, 🏟️ Venue: ${venue}, 📍 City: ${city}, 🕰️ MatchTime: ${matchTime}`);
					console.log(`⚡ Status: ${status} | FinishedRecently: ${isFinishedRecently} | Upcoming: ${isUpcoming} | Live: ${isLive}`);

					return venueMatch && (isFinishedRecently || isUpcoming || isLive);
				})
				.map((m: any) => ({
					id: m.matchInfo.matchId,
					startTime: new Date(parseInt(m.matchInfo.startDate)),
					venue: m.venueInfo?.ground || 'Unknown Venue',
					city: m.venueInfo?.city || 'Unknown City',
					status: m.matchInfo.stateTitle || m.matchInfo.status || 'Unknown',
					seriesName: m.matchInfo.seriesName || 'Unknown Series',
					team1: m.matchInfo.team1?.teamName || 'Team 1',
					team2: m.matchInfo.team2?.teamName || 'Team 2',
					team1Score: m.matchScore?.team1Score?.inngs1 ? `${m.matchScore.team1Score.inngs1.runs}/${m.matchScore.team1Score.inngs1.wickets} (${m.matchScore.team1Score.inngs1.overs} ov)` : 'N/A',
					team2Score: m.matchScore?.team2Score?.inngs1 ? `${m.matchScore.team2Score.inngs1.runs}/${m.matchScore.team2Score.inngs1.wickets} (${m.matchScore.team2Score.inngs1.overs} ov)` : 'N/A'
				}));

			console.log("✅ Filtered matches after venue & timeframe:", matches);
		} catch (err) {
			error = 'Could not load matches.';
			console.error(err);
			matches = [];
		}
	}
</script>

<div class="min-h-screen bg-white px-4 py-10">
	<h1 class="text-3xl font-bold text-blue-800 text-center mb-6">Search Matches by City</h1>

	<CitySearch on:search={handleSearch} />

	{#if isLoading}
		<p class="text-center text-blue-600 mt-4">Loading...</p>
	{/if}

	{#if error}
		<ErrorMessage message={error} />
	{/if}

	{#if selectedVenue}
		<div class="max-w-2xl mx-auto mt-6">
			<VenueInfo venue={selectedVenue} />
		</div>
	{/if}

	{#if weather}
		<div class="max-w-md mx-auto mt-6">
			<WeatherCard weatherData={weather} />
		</div>
	{/if}

	{#if matches.length}
		<h2 class="text-xl font-semibold text-center text-blue-700 mt-10 mb-4">
			Matches at {selectedVenue?.name}
		</h2>

		{#each matches as match}
			<div class="border rounded-xl shadow-md p-6 mb-4 bg-white">
				<h3 class="text-lg font-semibold text-blue-800">{match.seriesName}</h3>
				<p class="text-md text-gray-700">{match.team1} vs {match.team2}</p>
				<p class="text-sm text-gray-600">Venue: {match.venue} ({match.city})</p>
				<p class="text-sm text-gray-600">Start Time: {match.startTime.toLocaleString()}</p>
				<p class="text-sm text-green-600">Status: {match.status}</p>

				{#if match.team1Score}
					<p class="text-sm text-gray-700">{match.team1}: {match.team1Score}</p>
				{/if}
				{#if match.team2Score}
					<p class="text-sm text-gray-700">{match.team2}: {match.team2Score}</p>
				{/if}
			</div>
		{/each}
	{:else if selectedVenue}
		<p class="text-center text-gray-600 mt-4">No matches found at this venue.</p>
	{/if}
</div>
