<script lang="ts">
    import type { Page } from "@/types";

    interface PageWithChildren extends Page {
        children: PageWithChildren[];
    }
    export let navigation: PageWithChildren[];
    console.log(navigation)
</script>