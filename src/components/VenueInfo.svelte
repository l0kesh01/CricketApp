<script lang="ts">
  export let venue: {
    name: string;
    city: string;
    country: string;
    capacity: number;
    description: string;
  };
</script>

<div class="bg-white p-4 shadow rounded mt-4 max-w-lg mx-auto border">
  <h2 class="text-lg font-bold mb-2">{venue.name}</h2>
  <p><strong>City:</strong> {venue.city}</p>
  <p><strong>Country:</strong> {venue.country}</p>
  <p><strong>Capacity:</strong> {venue.capacity}</p>
  <p class="mt-2 italic">{venue.description}</p>
</div>
