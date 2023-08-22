<script lang="ts">
    import type { FAQBlock } from "@/types";
    import { slide } from "svelte/transition";

    export let faq: NonNullable<FAQBlock["faq"]>[number] 
    let open = false;
</script>

<button on:click={()=>{open = !open}} class="bg-brown py-3 block text-left w-full mt-10 px-4 rounded-lg">
    <h3 class="text-xl">{faq.question}</h3>
    {#if open}
        <p transition:slide class="pt-3">{faq.answer}</p>
    {/if}
</button>