<script>
    import axios from "axios";
    import {Router} from "@sveltech/routify";
    import {routes} from "@sveltech/routify/tmp/routes";

    axios.defaults.baseURL = "http://localhost:1337/";
</script>

<style>
    :global(body) {
        margin: 0;
        background: #abcce6;
    }
    :global(html) {
        font-size: 16px;
    }
</style>

<Router {routes} />
