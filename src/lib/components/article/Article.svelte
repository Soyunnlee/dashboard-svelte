<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import Description from './Description.svelte';

	export let title: string;
	export let info: string | undefined = undefined;
	export let code: string;

	interface DescriptionItem {
		name: string;
		info: string;
	}

	export let discription: DescriptionItem[];
</script>

<svelte:head>
	<title />
</svelte:head>

<div>
	<article class="space-y-4">
		<div class="space-y-2">
			<p class="text-2xl dark:text-white">{title}</p>
			<div class="text-base leading-7 text-gray-600 dark:text-gray-400">
				{@html info}
			</div>
		</div>
		<!-- Content -->
		{#if $$slots.default}
			<div
				class="flex flex-row items-center justify-center space-x-8 rounded border dark:border-gray-600 border-gray-400 py-6"
			>
				<slot />
			</div>
		{/if}
		<!-- bg-gray-800 -->
		<CodeBlock
			language="svelte"
			{code}
			class="rounded-md px-2 text-white bg-[#1c232a] dark:bg-[#13171D] overflow-x-auto scrollbar"
			style="white-space: pre-wrap"
		/>
		<!-- 222b35 -->
		{#if discription.length > 0}
			<Description {discription} />
		{/if}
	</article>
</div>
