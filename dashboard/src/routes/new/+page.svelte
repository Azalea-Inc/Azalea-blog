<div class="container mx-auto flex justify-center">
  <form action="" class="p-10 pt-6 flex-1 max-w-2xl flex flex-col">
    <div class="border-b mb-4 pb-4">
      <h1 class="text-3xl text-gray-700 font-semibold mb-2">
        Nueva publicación
      </h1>
      <p class="text-neutral-600 text-sm">
        Escribe un título atractivo, agrega contenido relevante y selecciona una
        categoría para tu post. Puedes guardarlo como borrador o publicarlo
        inmediatamente.
      </p>
    </div>

    <label for="title">Título</label>
    <input type="text" placeholder="Titulo" />

    <label for="description">Descripción breve</label>
    <textarea name="description" id="description" placeholder="Descripción"
    ></textarea>
    <label for="file">Contenido de la publicación </label>
    <input
      name="file"
      id="file"
      type="file"
      placeholder="Archivo de publicación"
    />

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
    @apply focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-green-500;
  }
</style>
