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
<div class="w-full flex justify-center items-center min-h-[200px]">
    <form on:submit|preventDefault={handleSearch} class="flex gap-3 w-full max-w-md px-4">
      <input
        type="text"
        placeholder="Enter city"
        bind:value={city}
        class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
      />
      <button
        type="submit"
        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-sm"
      >
        Search
      </button>
    </form>
  </div>
  
