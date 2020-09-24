<script>
    export let image,
        title,
        date,
        description,
        preForDescription = "";
</script>

<style>
    .wrapper {
        border-radius: 10px;
    }
    .img {
        max-height: 200px;
    }
</style>

<article class="wrapper flex overflow-hidden mt-8 bg-white">
    <img class="img w-auto h-auto" src={image} alt={`${title} poster`} />
    <div class="justify-between pt-1 pl-2 flex flex-col w-full">
        <div>
            <h1>{title}</h1>
            <time datetime={date}>{date}</time>
            <p class="pt-1">{preForDescription}{description}</p>
        </div>
        <slot />
    </div>
</article>
