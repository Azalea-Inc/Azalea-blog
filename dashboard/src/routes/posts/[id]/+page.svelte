<script>
  import "katex/dist/katex.min.css";
  import rehypeKatex from "rehype-katex";
  import remarkMath from "remark-math";
  import { onMount } from "svelte";
  import Markdown from "svelte-exmarkdown";
  import { gfmPlugin } from "svelte-exmarkdown/gfm";
  import Loading from "../../../components/Loading.svelte";
  const plugins = [
    gfmPlugin(),
    { remarkPlugin: [remarkMath], rehypePlugin: [rehypeKatex] }
  ];

  let source = "";
  let isLoading = true;

  onMount(async () => {
    isLoading = true;
    const response = await fetch("/example.md");
    source = await response.text();
    isLoading = false;
  });
</script>

<main class="container mx-auto max-w-2xl py-10 px-10">
  {#if isLoading}
    <Loading></Loading>
  {:else}
    <h1 class="text-4xl mb-4 font-bold text-gray-800">Titulo de Publicación</h1>
    <span class="text-sm text-gray-500">Joan Coronado</span>
    <div class="border-y mt-3 py-2 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <button class="text-sm text-gray-600 flex items-center gap-1">
          <i class="bi bi-heart-fill text-red-500"></i>
          1
        </button>

        <button class="text-sm text-gray-600 flex items-center gap-1">
          <i class="bi bi-chat"></i>
          1
        </button>
      </div>
      <a
        href="#"
        class="rounded-md shadow text-gray-700 text-sm bg-gray-100 hover:text-white hover:bg-green-500 px-2 p-1"
        >Editar</a
      >
    </div>

    <div class="prose prose-lg prose-gray py-10">
      <Markdown md={source} {plugins}></Markdown>
    </div>
  {/if}
</main>
