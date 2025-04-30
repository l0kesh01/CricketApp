<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
    let city = '';
  
    function handleSearch() {
      if (city.trim()) {
        dispatch('search', { city });
        city = '';
      }
    }
  </script>
  
  <!-- <form on:submit|preventDefault={handleSearch} class="flex space-x-2 mb-4">
    <input
      type="text"
      placeholder="Enter city"
      bind:value={city}
      class="border rounded px-3 py-2 w-full"
    />
    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
      Search
    </button>
  </form>
   -->
   <form on:submit|preventDefault={handleSearch} style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
    <input
      type="text"
      placeholder="Enter city"
      bind:value={city}
      style="border: 1px solid #ccc; border-radius: 0.25rem; padding: 0.5rem 0.75rem; flex: 1;"
    />
    <button
      type="submit"
      style="background-color: #2563eb; color: white; padding: 0.5rem 1rem; border-radius: 0.25rem; border: none; cursor: pointer;"
    >
      Search
    </button>
  </form>
  