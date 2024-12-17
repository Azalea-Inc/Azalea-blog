<script>
  import "bootstrap-icons/font/bootstrap-icons.css";
  import "../app.css";
  import Header from "../components/Header.svelte";
</script>

<div class="min-h-screen flex flex-col">
  <Header></Header>

  <slot />
</div>
