<script>
    export let src, title;
    const setSource = src => src.replace("https://youtu.be/", "https://www.youtube.com/embed/");
</script>

<iframe
    width="100%"
    height="500px"
    src={setSource(src)}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    {title} />
