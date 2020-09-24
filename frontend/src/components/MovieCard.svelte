<script>
    import {goto} from "@sveltech/routify";
    import Card from "../components/Card.svelte";
    import Button from "./Button.svelte";
    import {cardImage, getDirector, setCurrentIndex} from "../utils/movies";
    export let cardInfo, index;

    const showMovie = id => $goto(`../movie/${id}`);

    const handleButtonClick = () => {
        setCurrentIndex(index);
        showMovie(cardInfo.id);
    };
</script>

<Card
    image={cardImage(cardInfo.images).thumbnail}
    title={cardInfo.title}
    date={cardInfo.release_date}
    description={getDirector(cardInfo.details)}
    preForDescription="Directed by: ">
    <div class="mb-2 flex justify-center">
        <Button click={handleButtonClick}>See More</Button>
    </div>
</Card>
