<script>
    import CardSection from "./CardSection.svelte";
</script>

<style type="postcss">
    .title {
        @apply p-3;
    }
</style>

<main class="home-w flex-wrap justify-center">
    <div class="title w-90">
        <h1>Movies for free</h1>
        <p>The best movies that you will find in localhost</p>
    </div>
    <CardSection />
</main>
