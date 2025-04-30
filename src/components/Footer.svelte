<script>
  const year = new Date().getFullYear();
</script>

<div class="page-container">
  <main class="page-content">
    <slot />
  </main>

  <footer class="page-footer">
    &copy; {year} Cricket Weather App. All rights reserved.
  </footer>
</div>

<style>
  /* Reset and full height */
  :global(html), :global(body) {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: system-ui, sans-serif;
    box-sizing: border-box;
  }
  :global(*), :global(*::before), :global(*::after) {
    box-sizing: inherit;
  }

  /* Flex container fills viewport height */
  .page-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Content grows but doesn’t add extra margin */
  .page-content {
    flex-grow: 1;
    margin: 0;      /* no margin */
    padding: 0;     /* no padding bottom */
  }

  /* Footer styling */
  .page-footer {
    flex-shrink: 0;  /* don't shrink */
    background-color: #f3f4f6;
    text-align: center;
    font-size: 0.875rem;
    color: #4b5563;
    padding: 0.75rem 0;
    margin: 0;       /* no margin */
  }
</style>
