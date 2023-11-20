<script lnag="ts">
	import Article from '$lib/components/article/Article.svelte';
	import Intro from '$lib/components/article/Intro.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Icon, EllipsisHorizontal, Bars3 } from 'svelte-hero-icons';
	import { whiteBlinkDot, redBlinkDot } from './data';

	// #region Blink Interval Funtion
	let blinkInterval = 1;
	// Interval Function
	setInterval(() => {
		blinkInterval = (blinkInterval % 2) + 1;
	}, 1000);
	// #endregion

	let i = 0;
	let blinkEffectList = [whiteBlinkDot, redBlinkDot];

	// #region style
	export const style = {
		descriptionWrap: `flex flex-row space-x-1 py-4`,
		descriptionTitleWrap: `text-left w-[15%] border-r-[0.08rem] border-gray-400  flex items-center justify-center`,
		// bg-[#ABD2C9] text-[#195239]
		descriptionTitle: `rounded px-1.5  text-sm bg-[#aad3cb] text-emerald-800`,
		description: `pl-3 leading-7`,
		codeBlock: `overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white`
	};
	// #endregion
</script>

<svelte:head>
	<title>Event</title>
</svelte:head>

<div class="h-[calc(100vh-60px)] dark:bg-[#0E0E0E] px-8">
	<section class="px-3 pt-3 py-5">
		<!-- Intro -->
		<Intro title="Effect" intro="UI Effect 를 제공합니다." />

		<!-- Article -->
		<div class="space-y-8">
			<!-- 1. White Blink Effec -->
			<article class="space-y-4">
				<Article
					title={blinkEffectList[i].title}
					info={blinkEffectList[i].info}
					code={blinkEffectList[i].code}
					discription={blinkEffectList[i].discription}
				>
					<!-- White -->
					<div
						on:click={() => {
							i = 0;
						}}
						role="presentation"
					>
						{#if blinkInterval === 1}
							<div class="relative transition duration-300">
								<div
									class="absolute -inset-0.5 h-4 w-4 rounded-lg bg-white"
									style="filter: blur(4px);"
								/>
								<div class="relative flex h-3 w-3 items-center rounded-full bg-white" />
							</div>
						{:else}
							<div class="relative transition duration-300">
								<div class="absolute h-4 w-4" />
								<div class="relative h-3 w-3 rounded-full bg-gray-600" />
							</div>
						{/if}
					</div>

					<!-- Red -->
					<div
						on:click={() => {
							i = 1;
						}}
						role="presentation"
					>
						{#if blinkInterval === 1}
							<div
								class="relative transition duration-300"
								on:click={() => {
									i = 1;
								}}
								role="presentation"
							>
								<div
									class="absolute -inset-0.5 h-4 w-4 rounded-lg bg-red-600"
									style="filter: blur(7px);"
								/>
								<div class="relative flex h-3 w-3 items-center divide-x rounded-full bg-red-600" />
							</div>
						{:else}
							<div class="relative transition duration-300">
								<div class="absolute h-5 w-5" />
								<div class="relative h-3 w-3 rounded-full bg-red-800" />
							</div>
						{/if}
					</div>
				</Article>

				<!--  -->
			</article>
		</div>
	</section>
</div>
