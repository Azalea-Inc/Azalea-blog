<script>
  import PostCard from "./PostCard.svelte";

  let posts = [
    {
      title: "Reparación de computadoras",
      image:
        "https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate?,eaque"
    },
    {
      title: "Reparación de computadoras",
      image:
        "https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate?,eaque"
    },
    {
      title: "Mi primer experiencia grabando un podcast",
      image:
        "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate?,eaque"
    },
    {
      title: "Reparación de computadoras",
      image:
        "https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate?,eaque"
    },
    {
      title: "Reparación de computadoras",
      image:
        "https://images.unsplash.com/photo-1603694681044-e71c5993d6cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate?,eaque"
    }
  ];

  let defaultImage =
    "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";
</script>

<div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {#each posts as post}
    <PostCard {post}></PostCard>
  {/each}
</div>
