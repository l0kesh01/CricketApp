// src/routes/api/cricket/+server.ts
export async function GET() {
	const headers = {
		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
		'x-rapidapi-key': '6ca3b95e42msh2e13ef6c611d125p16c194jsn7569729e0617'
	};

	try {
		console.log('🔁 Fetching recent matches...');
		const recentRes = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', { headers });
		const recentData = await recentRes.json();

		console.log('🔁 Fetching upcoming matches...');
		const upcomingRes = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming', { headers });
		const upcomingData = await upcomingRes.json();

		console.log('🔁 Fetching live matches...');
		const liveRes = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live', { headers });
		const liveData = await liveRes.json();

		const allMatches = [
			...(recentData?.typeMatches || []),
			...(upcomingData?.typeMatches || []),
			...(liveData?.typeMatches || [])
		];

		return new Response(JSON.stringify({ typeMatches: allMatches }), {
			headers: { 'Content-Type': 'application/json' }
		});

	} catch (err) {
		console.error('🔥 Fetch failed:', err);
		return new Response(JSON.stringify({ error: 'Unexpected error during fetch' }), { status: 500 });
	}
}