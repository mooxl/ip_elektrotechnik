<script lang="ts">
    import type { Page } from "@/types";
    import { slide } from "svelte/transition";

    interface PageWithChildren extends Page {
        children: PageWithChildren[];
    }
    export let navigation: PageWithChildren[];
    let open = true;
    console.log(navigation)
</script>

<button on:click={()=>{open = !open}}>Hallo</button>
{#if open}
    <div transition:slide={{axis:"x"}} class="h-screen w-auto bg-white pl-5 pr-10 space-y-5 shadow-md py-5 fixed top-14 right-0">
    {#each navigation as item}
    <div class="flex flex-col gap-x-3">
        <a class="text-lg font-semibold" href={item.path+"/"}>{item.title}</a>
        {#each item.children as child}
            <a href={child.path+"/"} class="text-base">{child.title}</a>
        {/each}
    </div>
    {/each}
    </div>
{/if}