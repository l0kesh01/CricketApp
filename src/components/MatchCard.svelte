<script lang="ts">
  export let match: {
    id: number;
    startTime: string;
    venue: string;
  };
</script>

<div class="border rounded p-4 shadow mb-4 bg-white max-w-lg mx-auto">
  <h3 class="text-lg font-bold">{match.venue}</h3>
  <p class="text-gray-600 text-sm">Start Time: {new Date(match.startTime).toLocaleString()}</p>
</div>
