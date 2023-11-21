<script lnag="ts">
	import Article from '$lib/components/article/Article.svelte';
	import Intro from '$lib/components/article/Intro.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Icon, EllipsisHorizontal, Bars3 } from 'svelte-hero-icons';
	import { whiteBlinkDot, redBlinkDot, errorBorderEffect, errorBorderInsetEffect } from './data';

	// #region Blink Interval Funtion
	let blinkInterval = 1;
	// Interval Function
	setInterval(() => {
		blinkInterval = (blinkInterval % 2) + 1;
	}, 1000);
	// #endregion

	let i = 0;
	let blinkEffectList = [whiteBlinkDot, redBlinkDot];

	let k = 0;
	let errorList = [errorBorderEffect, errorBorderInsetEffect];
</script>

<svelte:head>
	<title>Effect</title>
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
									class="absolute -inset-0.5 h-4 w-4 rounded-lg dark:bg-white bg-blue-400"
									style="filter: blur(4px);"
								/>
								<div
									class="relative flex h-3 w-3 items-center rounded-full dark:bg-white bg-blue-400"
								/>
							</div>
						{:else}
							<div class="relative transition duration-300">
								<div class="absolute h-4 w-4" />
								<div class="relative h-3 w-3 rounded-full dark:bg-gray-600 bg-blue-200" />
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
									class="absolute -inset-0.5 h-4 w-4 rounded-lg dark:bg-red-600 bg-red-600"
									style="filter: blur(7px);"
								/>
								<div
									class="relative flex h-3 w-3 items-center divide-x rounded-full dark:bg-red-600 bg-red-600"
								/>
							</div>
						{:else}
							<div class="relative transition duration-300">
								<div class="absolute h-5 w-5" />
								<div class="relative h-3 w-3 rounded-full dark:bg-red-800 bg-red-200" />
							</div>
						{/if}
					</div>
				</Article>

				<Article
					title={errorList[k].title}
					info={errorList[k].info}
					code={errorList[k].code}
					discription={errorList[k].discription}
				>
					<!--Error Border Effect-->
					<div
						class="relative w-56 h-14"
						on:click={() => {
							k = 0;
						}}
						role="presentation"
					>
						<div
							class="absolute z-10 animate-pulse w-full h-full"
							style="box-shadow: 0 0 0 2px #FF0000 inset; filter:blur(2px)"
						/>
						<div class="w-full h-full flex justify-center items-center">Content</div>
					</div>

					<!--Error Border Inset -->
					<div
						class="relative w-52 h-12"
						on:click={() => {
							k = 1;
						}}
						role="presentation"
					>
						<div
							class="absolute -inset-1 shadow-[inset_0_0_15px_#FF0000] animate-pulse flex justify-center items-center"
						>
							Content
						</div>
					</div>
				</Article>
			</article>
		</div>
	</section>
</div>
