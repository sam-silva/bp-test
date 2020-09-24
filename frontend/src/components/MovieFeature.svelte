<script>
    export let label, value;
    const setValue = () => {
        if (value) return value;
        return "Unknown";
    };
</script>

<p class="mb-4"><span class="pr-2"> {`${label}`} </span> <span> {setValue()} </span></p>
