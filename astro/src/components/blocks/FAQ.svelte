<script lang="ts">
  import type { FAQBlock } from "@/types";
  import { slide } from "svelte/transition";

  export let faq: NonNullable<FAQBlock["faq"]>[number];
  let open = false;
</script>

<button
  on:click={() => {
    open = !open;
  }}

  class="bg-brown py-3 block text-left w-full mt-4 px-4 rounded-lg"
>
  <div class="flex justify-between">
    <h3 class="text-xl 768:text-lg">{faq.question}</h3>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="30"
      class={`transition-all duration-300 ${open ? "rotate-180" : ""}`}
      ><path
        d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
      /></svg
    >
  </div>
  {#if open}
    <p transition:slide class="pt-3">{faq.answer}</p>
  {/if}
</button>
