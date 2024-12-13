<div class="container mx-auto flex justify-center">
  <form action="" class="p-10 flex-1 max-w-2xl flex flex-col">
    <div class="pb-6">
      <h1 class="text-xl font-semibold mb-2">Crear una nueva publicación</h1>
      <p class="text-neutral-600">
        Escribe un título atractivo, agrega contenido relevante y selecciona una
        categoría para tu post. Puedes guardarlo como borrador o publicarlo
        inmediatamente.
      </p>
    </div>

    <label for="title">Título</label>
    <input type="text" placeholder="Titulo" />

    <label>Descripción breve</label>
    <textarea name="description" id="description" placeholder="Descripción"
    ></textarea>
    <label>Contenido de la publicación </label>
    <input type="file" placeholder="Archivo de publicación" />

    <div class="mt-2 flex items-center justify-end">
      <button
        class="p-2 rounded-lg shadow-md text-white hover:bg-green-600 bg-green-500"
        >Crear publicación</button
      >
    </div>
  </form>
</div>

<style>
  input,
  textarea {
    @apply border mb-4 p-2 rounded-lg shadow;
  }
</style>
