<script>
    export let click = () => {},
        isSubmit = false,
        customClass = "",
        aditionalClass = "",
        disable = false;
    const defaultClass = () =>
        "   font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-white";
</script>

<button
    on:click={!disable && click}
    class:bg-gray-500={disable}
    class:bg-blue-500={!disable}
    class:hover:bg-blue-700={!disable}
    type={isSubmit ? 'submit' : 'button'}
    {disable}
    class={`${customClass || defaultClass()} ${aditionalClass}`}>
    <slot />
</button>
