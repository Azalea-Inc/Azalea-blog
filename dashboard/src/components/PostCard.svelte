<script>
  export let post;
</script>

<!-- <a href="/posts/2"> -->
<div class="bg-white p-4 hover:shadow-xl rounded-xl flex flex-col gap-2">
  <img
    src={post.image ? post.image : defaultImage}
    alt="Post-default"
    class="rounded-md h-48 object-cover"
  />

  <div class="pt-4">
    <h3 class="font-extrabold text-xl text-gray-800">{post.title}</h3>
    <p class="text-gray-500 text-sm">
      {post.description}
    </p>
  </div>

  <div class="flex flex-1 items-end text-sm text-gray-400 mt-2">
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center gap-4">
        <span>
          <i class="bi bi-heart-fill"></i>
          1k
        </span>

        <span>
          <i class="bi bi-chat-fill"></i>
          200
        </span>
      </div>

      <a href="/posts/2" class="p-2 shadow rounded-md bg-green-500 text-white"
        >Más información</a
      >
    </div>
  </div>
</div>
<!-- </a> -->
