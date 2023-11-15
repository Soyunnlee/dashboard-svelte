<script>
	import Article from '$lib/components/article/Article.svelte';
	import Intro from '$lib/components/article/Intro.svelte';
	import AlarmButton from '$lib/components/button/AlarmButton.svelte';
	import ButtonBase from '$lib/components/button/ButtonBase.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Icon, EllipsisHorizontal, Bars3 } from 'svelte-hero-icons';

	export const style = {
		descriptionWrap: `flex flex-row space-x-1 py-4`,
		descriptionTitleWrap: `text-left w-[15%] border-r-[0.08rem] border-gray-400  flex items-center justify-center`,
		// bg-[#ABD2C9] text-[#195239]
		descriptionTitle: `rounded px-1.5  text-sm bg-[#aad3cb] text-emerald-800`,
		description: `pl-3 leading-7`,
		codeBlock: `overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white`
	};
</script>

<svelte:head>
	<title>Chart</title>
</svelte:head>

<div class="h-[calc(100vh-60px)] bg-[#0E0E0E] px-8 text-white">dd</div>
