<script>
    import {currentSelectedMovieIndex, movies} from "../../stores/stores";
    import axios from "axios";
    import {onMount} from "svelte";
    import {isNotNull} from "../../utils/functions";
    import Button from "../../components/Button.svelte";
    import {goto} from "@sveltech/routify";
    import {setCurrentIndex} from "../../utils/movies";
    export let movieId;
    let movieInfo;

    async function getSingleMovie(id) {
        const response = await axios.get(`movies/${id}`);
        if (response && response.data && response.data && response.data.movie) {
            return response.data.movie;
        }
        throw new Error("try again");
    }
    const goHome = () => {
        setCurrentIndex(null);
        $goto("/");
    };

    onMount(() => {
        if (isNotNull($currentSelectedMovieIndex)) {
            return (movieInfo = $movies[$currentSelectedMovieIndex]);
        }
        return (movieInfo = getSingleMovie(movieId));
    });
</script>

<style>
    .content {
        max-width: 768px;
        min-height: 60vh;
        @apply bg-white;
    }
</style>

<main class="home-w flex-col">
    <nav class="pt-2 pl-4 self-start mb-4">
        <Button click={goHome}>Home</Button>
    </nav>
    <article class="w-90 content rounded mb-8">
        <slot scoped={{movie: movieInfo}} />
    </article>
</main>
