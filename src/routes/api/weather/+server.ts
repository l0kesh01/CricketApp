// src/routes/weather/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import.meta.env.VITE_OPENWEATHER_API_KEY
export const GET: RequestHandler = async ({ url }) => {
	const city = url.searchParams.get('city') ?? 'Hyderabad';
	const apiKey = '7a66b18c611c5749ef49549538076c7d'; // make sure your actual key is here
	const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	try {
		const response = await fetch(weatherUrl);
		if (!response.ok) {
			return new Response(JSON.stringify({ error: 'Failed to fetch weather' }), { status: 500 });
		}

		const data = await response.json();
		return new Response(JSON.stringify(data), { status: 200 });
	} catch (err) {
		console.error('API error:', err);
		return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
	}
};
