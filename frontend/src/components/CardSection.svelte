<script>
    import {onMount} from "svelte";
    import {movies} from "../stores/stores";
    import axios from "axios";
    import MovieCard from "./MovieCard.svelte";

    async function getMovies() {
        const response = await axios.get(`movies`);
        if (response && response.data && response.data && response.data.movies) {
            movies.set(response.data.movies.results);
            return response.data.results;
        }
        throw new Error("try again");
    }
    onMount(() => {
        if (!$movies.length) return getMovies();
    });
</script>

<style>
    .sect {
        width: 90%;
    }
</style>

{#if $movies.length > 0}
    <section class="sect grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
        {#each $movies as movie, i (movie.id)}
            <MovieCard cardInfo={movie} index={i} />
        {/each}
    </section>
{/if}
