<script lang="ts">
</script>

<main>
	<h1>Welcome to CricFever</h1>
	<p>Get real-time cricket match updates and live weather forecasts for major cricket venues across the globe. Whether you're tracking an IPL match in Hyderabad, a T20 showdown in Delhi, or an international fixture in London, this app helps you stay informed with:</p>

	<p>✅ <strong>Live Match Details</strong> – Score updates, match status, team names, and series information.</p>
		
	<p>📅 <strong>Upcoming Matches</strong> – Know what's scheduled in the next few days at any stadium.</p>
		
	<p>🏟️ <strong>Venue-Based Search</strong> – Simply enter a city or stadium name to filter matches relevant to that location.</p>
		
	<p>🌤️ <strong>Integrated Weather Forecasts</strong> – See the latest weather info (temperature, humidity, wind speed, conditions) at the selected match venue.</p>
		
	<p>Our platform combines sports and weather APIs to give fans, travelers, and fantasy league players an all-in-one tool for smarter match-day planning.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 3rem 2rem;
		max-width: 900px;
		margin: 0 auto;
		background: linear-gradient(to bottom right, #f0f9ff, #e0fee3);
		border-radius: 1rem;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
		animation: fadeIn 1s ease-in-out;
	}

	h1 {
		color: #0b8043;
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
	}

	p {
		font-size: 1.15rem;
		color: #333;
		margin-bottom: 1.2rem;
		line-height: 1.6;
	}

	p strong {
		color: #0b8043;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 2rem;
		}
		p {
			font-size: 1rem;
		}
		main {
			padding: 2rem 1rem;
		}
	}
</style>
