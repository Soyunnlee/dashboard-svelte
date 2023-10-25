<script script lang="ts">
	import Article from '$lib/components/article/Article.svelte';
	import Intro from '$lib/components/article/Intro.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { baseCard } from './data';
	//#region Import

	let i = 0;
	// let k = 0;
	// let j = 0;
	let cardList = [baseCard];
	// let alarmBtnList = [alarmBtn, alarmNumberBtn];
	// let designBtnList = [];
	//#endregion
</script>

<svelte:head>
	<title>Card</title>
</svelte:head>

<div class="h-[calc(100vh-60px)] overflow-y-scroll dark:bg-[#0E0E0E] px-8">
	<section class="px-3 pt-5">
		<!-- Intro -->
		<Intro
			title="Card"
			intro="카드는 단일 주제에 대한 콘텐츠와 작업을 표시합니다.<br/>Card Title 과 InerShadow Effect 를 사용해 계층 구조를 나타냅니다.<br/>Theme 와 Bgcolor 에 따라 컨테이너 요소를 구분지을 수 있는 Color System 을 사용하여 커스텀
			합니다."
		/>

		<!-- Article -->
		<div class="space-y-8">
			<Article
				title={cardList[i].title}
				info={cardList[i].info}
				code={cardList[i].code}
				discription={cardList[i].discription}
				><article
					class="h-44 w-60 rounded-xl bg-[#141517] shadow-[inset_0_0_10px_#4B5563] shadow-gray-600 2xl:shadow-[inset_0_0_10px_#4B5563]"
				>
					<div
						class="py-2.5"
						style="background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 100%, rgba(20,21,23,0) 100%);"
					>
						<!-- Title -->
						<div class="flex w-full items-center justify-center">
							<p class=" text-base font-medium">Card title</p>
						</div>
						<!-- // Content -->
					</div>
				</article>
			</Article>
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl"># 1. BaseCard</p>
				</div>

				<container
					class="flex items-center justify-center border py-6 border-gray-600 rounded w-3/5"
				>
					<article
						class="rounded-xl bg-[#141517] shadow-[inset_0_0_10px_#4B5563] shadow-gray-600 2xl:shadow-[inset_0_0_10px_#4B5563] h-44 w-60"
					>
						<!-- Card Title -->
						<div
							class="py-2.5"
							style="background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 100%, rgba(20,21,23,0) 100%);"
						>
							<!-- Title -->
							<div class="flex justify-center items-center w-full">
								<p class=" text-base font-medium">Card title</p>
							</div>
						</div>
					</article>
				</container>

				<CodeBlock
					language="svelte"
					code={`
<article class="h-44 w-60 rounded-xl bg-[#141517] shadow-[inset_0_0_10px_#4B5563] shadow-gray-600 2xl:shadow-[inset_0_0_10px_#4B5563]" >
 <div class="py-2.5" style="background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 100%, rgba(20,21,23,0) 100%);" >
 <!-- Title -->
  <div class="flex w-full items-center justify-center">
   <p class=" text-base font-medium">Card title</p>
  </div>
 // Content
 </div>
</article>
						`}
					class="rounded-md bg-gray-800 px-2 text-white"
					style="white-space: pre-wrap"
				/>
			</article>

			<!-- Card Wrap -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl"># 1-1. CardWrap</p>
					<p class="">
						Bg Color 와 대비되는 InerShadow Color 와 Effect 를 사용하여 단일요소의 목적을 명확히
						합니다.
					</p>
				</div>

				<container
					class="flex items-center justify-center border py-6 border-gray-600 rounded w-3/5"
				>
					<article
						class="rounded-xl bg-[#141517] shadow-[inset_0_0_10px_#4B5563] shadow-gray-600 2xl:shadow-[inset_0_0_10px_#4B5563] h-44 w-60"
					/>
				</container>

				<CodeBlock
					language="svelte"
					code={`
	<article class="rounded-xl bg-[#141517] shadow-[inset_0_0_10px_#4B5563] 2xl:shadow-[inset_0_0_10px_#4B5563] h-44 w-60"></article>
				`}
					class="overflow-x-auto rounded-md bg-gray-800 px-2 text-white py-4"
					style="white-space: pre-wrap"
				/>
			</article>

			<!-- 가독성 카그 -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl">#2 가독성 카드</p>
					<p class="">
						Bg Color 와 대비되는 InerShadow Color 와 Effect 를 사용하여 단일요소의 목적을 명확히
						합니다.
					</p>
				</div>

				<container
					class="flex items-center justify-center border py-6 border-gray-600 rounded w-3/5"
				>
					<article
						class="rounded-md shadow-[inset_0_0_11px_#3B445B] shadow-[#797B95] 2xl:shadow-[inset_0_0_25px_#797B95] bg-[#0a1631] h-44 w-60"
					>
						<!-- Card Title -->
						<div
							class="py-2.5"
							style="background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 100%, rgba(20,21,23,0) 100%);"
						>
							<!-- Title -->
							<div class="flex justify-center items-center w-full">
								<p class=" text-base font-medium">Card title</p>
							</div>
						</div>
					</article>
				</container>

				<CodeBlock
					language="svelte"
					code={`
	<article class="rounded-xl bg-[#141517] shadow-[inset_0_0_10px_#4B5563] 2xl:shadow-[inset_0_0_10px_#4B5563] h-44 w-60"></article>
				`}
					class="overflow-x-auto rounded-md bg-gray-800 px-2 text-white py-4"
					style="white-space: pre-wrap"
				/>
			</article>
		</div>
	</section>
</div>

<style>
	::-webkit-scrollbar {
		width: 8px;
		/* display: block; */
	}

	::-webkit-scrollbar-track {
		background: #615c5c;
	}
	::-webkit-scrollbar-thumb {
		background: #837d7d;
		border-radius: 40px;
	}
</style>
