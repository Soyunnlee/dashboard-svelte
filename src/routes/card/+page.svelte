<script script lang="ts">
	import Article from '$lib/components/article/Article.svelte';
	import Intro from '$lib/components/article/Intro.svelte';
	import {
		titleCard,
		cardWrap,
		readabilityCard,
		designCardCol,
		designCardRow,
		dentedCard
	} from './data';
	import { isDarkMode } from '../../dashboard/provider/store';
	//#region Import

	let i = 1;
	let k = 3;
	let cardList = [cardWrap, titleCard, readabilityCard, designCardCol, designCardRow, dentedCard];
	//#endregion
</script>

<svelte:head>
	<title>Card</title>
</svelte:head>

<div class="h-[calc(100vh-60px)] dark:bg-[#0E0E0E] px-8">
	<section class="mb-3 px-3 py-5">
		<!-- Intro -->
		<Intro
			title="Card"
			intro="카드는 단일 주제에 대한 콘텐츠와 작업을 표시합니다.<br/>Card Title 과 InerShadow Effect 를 사용해 계층 구조를 나타냅니다.<br/>Theme 와 Bgcolor 에 따라 컨테이너 요소를 구분지을 수 있는 Color System 을 사용하여 커스텀
			합니다."
		/>
		<!-- Article -->
		<div class="space-y-8">
			<Article
				title={cardList[0].title}
				info={cardList[0].info}
				code={cardList[0].code}
				discription={cardList[0].discription}
			>
				<article
					class="rounded-xl bg-white dark:bg-[#141517] dark:shadow-[inset_0_0_10px_#4B5563] dark:shadow-gray-600 shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-56 w-72"
				>
					<div class="flex h-full items-center justify-center">Content</div>
				</article>
			</Article>

			<!-- 2. Card Title -->
			<Article
				title={cardList[i].title}
				info={cardList[i].info}
				code={cardList[i].code}
				discription={cardList[i].discription}
			>
				<!-- 2-1. 타이틀카드 -->
				<article
					class="h-56 w-72 rounded-xl dark:bg-[#141517] bg-white dark:shadow-inner dark:shadow-gray-600 dark:2xl:shadow-[inset_0_0_10px_#4B5563] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col"
					on:click={() => {
						i = 1;
					}}
					role="presentation"
				>
					<!-- Title -->
					<div
						class="py-4 border-b border-[#DBDBDB] dark:border-none"
						style={$isDarkMode
							? 'background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 50%, rgba(20,21,23,0) 100%);'
							: ''}
					>
						<div class="flex w-full items-center justify-center">
							<p class=" text-base font-medium">Card title</p>
						</div>
					</div>
					<!-- Slot 영역 -->
					<div class="h-full flex items-center justify-center">Content</div>
				</article>

				<!-- 2-2. 가독성 카드 -->
				<article
					class="rounded-xl dark:shadow-inner dark:shadow-gray-600 dark:2xl:shadow-[inset_0_0_10px_#4B5563] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#EEF8FF] dark:bg-[#0a1631] h-56 w-72 flex flex-col"
					on:click={() => {
						i = 2;
					}}
					role="presentation"
				>
					<!-- Title -->
					<div
						class="shadow-[inset_-4px_-4px_20px_#E2EEFB] dark:shadow-none border-b border-indigo-100 dark:border-none py-4"
						style={$isDarkMode
							? 'background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 60%, rgba(20,21,23,0) 100%);'
							: ''}
					>
						<div class="flex justify-center items-center w-full">
							<p class=" text-base font-medium">Card title</p>
						</div>
					</div>
					<!-- Slot 영역 -->
					<div class="h-full flex items-center justify-center">Content</div>
				</article>
			</Article>

			<!-- Design Card -->
			<Article
				title={cardList[k].title}
				info={cardList[k].info}
				code={cardList[k].code}
				discription={cardList[k].discription}
			>
				<!-- 3. Design Card_Col -->
				<article
					class="rounded-xl flex justify-center h-56 w-56 shadow-[0_5px_10px_rgb(0,0,0,0.2)]"
					on:click={() => {
						k = 3;
					}}
					role="presentation"
				>
					<div
						class="rounded-xl relative overflow-hidden border-gray-100 w-full h-full bg-white"
						style={$isDarkMode
							? 'background: linear-gradient(106.15deg, #282828 1.61%, #0B0B0B 93.48%)'
							: 'background: linear-gradient(106.15deg, #F5FAFF 0.5%, #ffffff 93.48%)'}
					>
						<!-- Content -->
						<div class=" h-full w-full flex justify-center items-center">Content</div>
						<!-- UnderLine -->
						<span
							class="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-opacity-100"
						/>
					</div>
				</article>

				<!-- 3-1 Design Card_Row -->
				<article
					class="rounded-xl flex justify-center h-40 w-64 shadow-[0_5px_10px_rgb(0,0,0,0.2)]"
					on:click={() => {
						k = 4;
					}}
					role="presentation"
				>
					<div
						class="rounded-xl relative overflow-hidden border-gray-100 w-full h-full bg-white"
						style={$isDarkMode
							? 'background: linear-gradient(106.15deg, #282828 1.61%, #0B0B0B 93.48%)'
							: 'background: linear-gradient(106.15deg, #F5FAFF 0.5%, #ffffff 93.48%)'}
					>
						<!-- Line -->
						<span
							class="absolute inset-x-[97%] h-full w-3 bg-gradient-to-t from-purple-900 via-blue-500 to-green-500 bg-opacity-100"
						/>
						<!-- Content -->
						<div class=" h-full w-full flex justify-center items-center">Content</div>
					</div>
				</article>
			</Article>

			<!-- Dented Card -->
			<Article
				title={dentedCard.title}
				info={dentedCard.info}
				code={dentedCard.code}
				discription={dentedCard.discription}
			>
				<!-- z-0 Wrap -->
				<article
					class="mt-20 rounded-md dark:shadow-[inset_0_0_8px_#4B5563] dark:shadow-gray-600 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#F2F2F7] dark:bg-black h-72 w-[28rem]"
				>
					<!-- z-1 Wrap -->
					<div class="-mt-20 h-full flex justify-center">
						<!-- Design Card -->
						<div
							class=" h-full relative rounded overflow-hidden w-[55%] flex items-center justify-center bg-white"
							style={$isDarkMode
								? 'background: linear-gradient(106.15deg, #282828 1.61%, #0B0B0B 93.48%)'
								: 'background: linear-gradient(106.15deg, #F5FAFF 0.5%, #ffffff 93.48%)'}
						>
							Content
							<!-- UnderLine -->
							<span
								class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-opacity-100"
							/>
						</div>
					</div>
				</article>
			</Article>
		</div>
	</section>
</div>
