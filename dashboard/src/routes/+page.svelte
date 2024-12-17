<script>
  import PostGrid from "../components/PostGrid.svelte";
</script>

<main class="px-10 flex-1">
  <div class="container mx-auto max-w-5xl pb-10">
    <nav class="border-b border-b-[#f1f1f1] mb-6 flex items-center gap-2 pt-2">
      <a href="#" class="selected">Recientes</a>
      <a href="#">Devops</a>
      <a href="#">Tecnología</a>
    </nav>
    <PostGrid></PostGrid>
  </div>
</main>

<style>
  nav a {
    @apply border-b px-1 py-4 border-transparent text-gray-500 hover:text-gray-800 font-light text-sm;
  }

  .selected {
    @apply border-gray-800;
  }
</style>
