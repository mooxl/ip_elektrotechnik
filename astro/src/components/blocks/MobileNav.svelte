<script lang="ts">
    import type { Page } from "@/types";
    import { slide } from "svelte/transition";

    interface PageWithChildren extends Page {
        children: PageWithChildren[];
    }
    export let navigation: PageWithChildren[];
    let open = false;
    console.log(navigation)
</script>

<button on:click={()=>{open = !open}}>Hallo</button>
{#if open}
    <div transition:slide={{axis:"x"}} class="h-screen w-10 bg-red-400 fixed top-14 right-0"></div>
{/if}