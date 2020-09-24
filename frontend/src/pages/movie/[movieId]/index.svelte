<script>
    import MovieFeature from "../../../components/MovieFeature.svelte";
    import Iframe from "../../../components/Iframe.svelte";
    import {cardImage, getDirector, getStoryLine, findVideo, getCast} from "../../../utils/movies";
    import ButtonsShowMovie from "../../../components/ButtonsShowMovie.svelte";
    export let scoped;
    $: movie = scoped && scoped.movie;
</script>

<style>
    .img {
        max-width: 400px;
        max-height: 300px;
    }
    .container-iframe {
        max-width: 100%;
    }
</style>

{#if movie}
    <div class="w-full p-4">
        <MovieFeature label="Title: " value={movie.title} />
        <MovieFeature label="Release: " value={movie.release_date} />
        <MovieFeature label="Director: " value={getDirector(movie.details)} />
        <MovieFeature label="Cast: " value={getCast(movie.details)} />
        <MovieFeature label="Story Line: " value={getStoryLine(movie.details)} />
        <div class="pb-4">
            <p class="pb-2">Image:</p>
            <img class="img" src={cardImage(movie.images).url} alt={movie.title} />
        </div>
        {#if movie.videos && movie.videos.length > 0 && findVideo(movie.videos)}
            <p class="pb-2">Trailer:</p>
            <div class="container-iframe">
                <Iframe src={findVideo(movie.videos).url} title={`${movie.title} trailer`} />
            </div>
        {/if}
    </div>
    <ButtonsShowMovie />
{/if}
