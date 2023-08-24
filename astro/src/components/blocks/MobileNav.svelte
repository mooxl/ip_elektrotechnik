<script lang="ts">
    import type { Page } from "@/types";
    import { slide} from "svelte/transition";

    interface PageWithChildren extends Page {
        children: PageWithChildren[];
    }
    export let navigation: PageWithChildren[];
    let open = false;
</script>

<button class="space-y-1 p-1" on:click={()=>{open = !open}}>
<div class="w-5 h-[2px] bg-mint"></div>
<div class="w-5 h-[2px] bg-mint"></div>
<div class="w-5 h-[2px] bg-mint"></div>
</button>
{#if open}
    <div transition:slide={{axis:"x"}} class="h-screen w-auto overflow-hidden bg-white pl-5 pr-10 space-y-5 shadow-md py-5 fixed top-14 right-0">
    {#each navigation as item}
    <div class="flex flex-col gap-x-3">
        <a class="text-lg font-semibold whitespace-nowrap" href={item.path+"/"}>{item.title}</a>
        {#each item.children as child}
        <a href={child.path+"/"} class="text-base whitespace-nowrap">{child.title}</a>
        {/each}
        
    </div>
    {/each}
    <a class="text-lg font-semibold block whitespace-nowrap" href="/impressum/">Impressum</a>
        <a class="text-lg font-semibold block whitespace-nowrap" href="/datenschutz/">Datenschutz</a>
    </div>
{/if}