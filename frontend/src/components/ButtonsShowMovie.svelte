<script>
    import {url, goto} from "@sveltech/routify";
    import Button from "./Button.svelte";
    import {updateMovieStore, inputErrorStore} from "../stores/stores";
    import axios from "axios";
    export let movieId;
    const isEdit = () => $url().includes("edit");
    const goEdit = () => $goto("../edit");
    const goShow = () => $goto("../../");

    async function saveUpdates() {
        inputErrorStore.set(true);
        const response = await axios.put(`movies/${movieId}`, $updateMovieStore);

        inputErrorStore.set(false);
        if (response.data) {
            console.log(response.data);
        }
    }
</script>

<div class="flex justify-center mb-2">
    <div class="pr-2">
        <Button
            disable={(isEdit() && $inputErrorStore) || false}
            click={isEdit() ? saveUpdates : goEdit}>
            {isEdit() ? 'Save' : 'Edit'}
        </Button>
    </div>
    {#if isEdit()}
        <Button click={goShow}>Cancel</Button>
    {/if}
</div>
