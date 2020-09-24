<script>
    import ButtonsShowMovie from "../../../../components/ButtonsShowMovie.svelte";
    import TextInput from "../../../../components/TextInput.svelte";
    export let scoped;
    import {textInputData} from "../../../../static_data/updateMovieData";
    import {updateMovieStore, inputErrorStore} from "../../../../stores/stores";
    $: movie = scoped && scoped.movie;
</script>

<div class="w-full p-4">
    {#each textInputData(movie, updateMovieStore) as inputData}
        <TextInput notifyError={inputErrorStore.set} {...inputData} />
    {/each}
</div>
<ButtonsShowMovie movieId={movie.id} />
