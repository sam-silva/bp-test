<script>
    import {onMount} from "svelte";

    import {runValidations} from "../utils/validations";
    export let placeholder = "",
        id = "",
        label,
        updateStore = () => {},
        validations = {},
        defaultValue = "",
        notifyError = () => {};

    let value = defaultValue,
        hasError,
        errorMessage;
    const validate = () => {
        const {message, error} = runValidations(value, validations);
        hasError = error;
        errorMessage = message;
    };
    onMount(() => {
        validate(value, validations);
        return updateStore(value);
    });

    $: updateStore(value);
    $: notifyError(hasError);
</script>

<div class="pb-4">
    {#if label}<label class="block text-sm font-bold mb-2" for={id}>{label}</label>{/if}
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
            focus:outline-none focus:shadow-outline"
        class:border-red-500={hasError}
        {id}
        type="text"
        {placeholder}
        bind:value
        on:blur={validate}
        on:input={validate} />
    {#if hasError}
        <p class="pt-2 text-red-500">{errorMessage}</p>
    {/if}
</div>
