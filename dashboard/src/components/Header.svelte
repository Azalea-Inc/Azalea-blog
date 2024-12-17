<header class="border-b px-10 shadow-sm">
  <div class="container mx-auto flex items-center gap-4 justify-between">
    <a href="/"
      ><h1>Azalea <span class="text-green-500 font-bold">Blog</span></h1></a
    >

    <nav class="flex items-center gap-2">
      <a href="/new">Crear<i class="bi bi-plus"></i> </a>

      <span class="h-5 border-l border-gray-300"></span>
      <a href="#">Iniciar Sesión</a>
    </nav>
  </div>
</header>

<style>
  nav a {
    @apply border-b-2 px-1 py-4 border-transparent text-gray-500 hover:text-gray-800 font-light text-sm;
    @apply hover:border-gray-800;
  }

  .selected {
    @apply border-gray-800;
  }
</style>
