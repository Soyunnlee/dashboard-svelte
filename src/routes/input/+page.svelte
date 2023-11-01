<script lang="ts">
	//#region Import
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import LabelInput from '$lib/components/input/LabelInput.svelte';
	import Intro from '$lib/components/article/Intro.svelte';
	import Article from '$lib/components/article/Article.svelte';
	import { labelInput } from './data';
	//#endregion

	//#region Gloval Variable
	const style = {
		descriptionWrap: `flex flex-row space-x-1 py-4`,
		descriptionTitleWrap: `text-left w-[15%] border-r-[0.08rem] border-gray-400  flex items-center justify-center`,
		// bg-[#ABD2C9] text-[#195239]
		descriptionTitle: `rounded px-1.5  text-sm bg-[#aad3cb] text-emerald-800`,
		description: `pl-3 leading-7`,
		CodeBlock: `overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white`
	};
	//#endregion
</script>

<svelte:head>
	<title>Input</title>
</svelte:head>

<div class="h-[calc(100vh-60px)] px-8">
	<section class="mb-3 px-3 py-5">
		<!-- Intro -->
		<Intro
			title="Input"
			intro="ID , 암호 , 텍스트, 숫자 등 데이터 입력 작업을 수행하는 사용자 인터페이스를 제공 합니다."
		/>

		<!-- Articles -->
		<div class="space-y-8">
			<Article
				title={labelInput.title}
				info={labelInput.info}
				code={labelInput.code}
				discription={labelInput.discription}
			>
				<LabelInput placeholder="ID" />
				<!-- <div
					class="relative mb-0 rounded-md outline outline-1 outline-gray-300 backdrop-blur-md dark:bg-[#0E0E0E]"
				>
					<input
						placeholder=" "
						type="text"
						name="userId"
						class="block w-full appearance-none rounded-md border-0 bg-transparent p-2 pl-3 text-lg focus:outline-none"
					/>

					<label
						class="origin-0 absolute top-1 -z-10 rounded-md duration-300 pt-1.5 pl-2"
						for="userId"
					>
						<span class="dark:bg-[#0E0E0E] duration-0 px-1 bg-inherit"> ID </span>
					</label>
				</div> -->
			</Article>
			<!-- 1. Label Input -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="text-3xl">1. Label Input</p>
					<div class=" text-lg leading-7 text-gray-300">
						<p class="">
							데이터 입력 작업을 수행 할 경우 Label 이 위로 올라가 입력해야 할 Text 정보를
							나타내주는 Label Input 입니다.
						</p>
					</div>
				</div>

				<!-- Content -->
				<div
					class="flex w-3/5 flex-row items-center justify-center space-x-5 rounded border border-gray-600 py-6"
				>
					<!-- <LabelInput
						type="password"
						style=""
						inputName=""
						placeholder=""
						onChange={(value) => {
							console.log(value);
						}}
					/> -->
					<LabelInput placeholder="ID" />
				</div>

				<CodeBlock
					language="svelte"
					code={`<CardWrap
 addClass="h-56 w-72"
 addStyle=""
 shadowCalss="shadow-[inset_0_0_10px_#4B5563] shadow-gray-600 2xl:shadow-[inset_0_0_10px_#4B5563]"
>
 <div class="flex h-full items-center justify-center">Content</div>
</CardWrap>
								`}
					class={style.CodeBlock}
				/>

				<!-- Props Description Box -->
				<div class="h-auto w-full space-y-0 divide-y divide-gray-600 rounded-md bg-gray-800 px-8">
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>addClass</p>
						</li>
						<span class={style.description}
							>Card 의 여백지정 , 혹은 추가 Calss 를 입력할 수 있습니다.</span
						>
					</div>
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>addStyle</p>
						</li>
						<span class={style.description}
							>각도 조절 및 세부 조정 커스텀이 필요한 경우엔 Css 를 사용하여 커스텀 해줍니다.</span
						>
					</div>
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>shadowClass</p>
						</li>
						<span class={style.description}
							>Card Bg Color 와 대비되는 Shadow Color 를 사용하여 단일요소의 목적을 명확히 합니다. <br
							/>카드 크기 혹은 색상에 따라 shadow Color 와 inset 속성의 크기를 커스텀 합니다.</span
						>
					</div>
				</div>
			</article>

			<!-- 2. Title Card -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="text-3xl">2. Title Card</p>
					<div>
						<!-- <p class="">Tilte 이 있는 카드 입니다.</p> -->
					</div>
				</div>

				<!-- Content -->
				<div
					class="flex w-3/5 flex-row items-center justify-center space-x-5 rounded border border-gray-600 py-6"
				>
					<!-- <TitleCard
						addClass="h-56 w-72"
						addStyle=""
						shadowClass="shadow-inner shadow-gray-600 2xl:shadow-[inset_0_0_10px_#4B5563]"
						cardTitle="Card Title"
						addTitleClass="py-4"
						addTitleStyle="background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 50%, rgba(20,21,23,0) 100%);"
					>
						<div class="flex h-full items-center justify-center">Content</div>
					</TitleCard> -->
				</div>

				<CodeBlock
					language="svelte"
					code={`<TitleCard
 addClass="h-56 w-72"
 addStyle=""
 shadowClass="shadow-inner shadow-gray-600 2xl:shadow-[inset_0_0_10px_#4B5563]"
 cardTitle="Card Title"
 addTitleClass="py-4"
 addTitleStyle="background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 50%, rgba(20,21,23,0) 100%);"
>
 <div class="flex h-full items-center justify-center">Content</div> 
</TitleCard>
					`}
					class={style.CodeBlock}
				/>

				<!-- Props Description Box -->
				<div class="h-auto w-full space-y-0 divide-y divide-gray-600 rounded-md bg-gray-800 px-8">
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>addClass</p>
						</li>
						<span class={style.description}
							>Card 의 여백지정 , 혹은 추가 Calss 를 입력할 수 있습니다.</span
						>
					</div>
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>addStyle</p>
						</li>
						<span class={style.description}
							>각도 조절 및 세부 조정 커스텀이 필요한 경우엔 Css 를 사용하여 커스텀 해줍니다.</span
						>
					</div>
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>shadowClass</p>
						</li>
						<span class={style.description}
							>Card Bg Color 와 대비되는 Shadow Color 를 사용하여 단일요소의 목적을 명확히 합니다. <br
							/>카드 크기 혹은 색상에 따라 shadow Color 와 inset 속성의 크기를 커스텀 합니다.</span
						>
					</div>
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>CardTitle</p>
						</li>
						<span class={style.description}>Title 에 들어갈 Text 를 입력 합니다.</span>
					</div>

					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>addTitleClass</p>
						</li>
						<span class={style.description}
							>CardTitle 의 여백지정, 혹은 추가 Class 를 입력할 수 있습니다.</span
						>
					</div>
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>addTitleStyle</p>
						</li>
						<span class="{style.description} "
							>Title 의 가독성을 높이기 위해 Card Bg Color 와 조화를 이루며 투명도에 가까운 색상을
							추출해 radial-gradient 효과를 사용하였습니다. <br />Card 의 크기에 따라 % 로 gradient
							의 크기를 조절하여 커스텀 합니다. 필요에 따라 색상도 커스텀 하여 사용합니다.</span
						>
					</div>
				</div>
			</article>

			<!-- 3. 가독성 카드 -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="text-3xl">3. Readability Card _ 가독성 카드</p>
					<div class=" text-lg leading-7 text-gray-300">
						<p>
							Theme 와 기본 CardWrap Color 를 고려해 조화를 이루면서도 시각적으로 구별될 수 있는
							색상을 추출하고
						</p>
						<p />
						<p>
							그에 따른 InnerShadow Color 또한 추출된 색상과 대비될수 있는 색상으로 커스텀 합니다.
						</p>
					</div>
				</div>
				<!-- Content -->
				<div
					class="flex w-3/5 flex-row items-center justify-center space-x-5 rounded border border-gray-600 py-6"
				>
					<container class="flex items-center justify-start pl-1">
						<!-- <ReadabilityCard
							addClass=" bg-[#0a1631] h-56 w-72"
							addStyle=""
							shadowClass="shadow-[inset_0_0_11px_#3B445B] shadow-[#797B95] 2xl:shadow-[inset_0_0_25px_#797B95]"
							cardTitle="Card Title"
							addTitleClass="py-4"
							addTitleStyle="background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 100%, rgba(20,21,23,0) 100%);"
						>
							<div class="flex h-full items-center justify-center">Content</div>
						</ReadabilityCard> -->
					</container>
				</div>

				<CodeBlock
					language="svelte"
					code={`<ReadabilityCard
 addClass=" bg-[#0a1631] h-56 w-72"
 addStyle=""
 shadowClass="shadow-[inset_0_0_11px_#3B445B] shadow-[#797B95] 2xl:shadow-[inset_0_0_25px_#797B95]"
 cardTitle="Card Title"
 addTitleClass="py-4"
 addTitleStyle="background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 100%, rgba(20,21,23,0) 100%);"
>
 <div class="flex h-full items-center justify-center">Content</div>
</ReadabilityCard>
										`}
					class={style.CodeBlock}
				/>
				<!-- Props Description Box -->
				<div class="h-auto w-full space-y-0 divide-y divide-gray-600 rounded-md bg-gray-800 px-8">
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>addClass</p>
						</li>
						<span class={style.description}
							>Background Color 변경, Card 의 여백지정 , 혹은 추가 Calss 를 입력할 수 있습니다.</span
						>
					</div>
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>addStyle</p>
						</li>
						<span class={style.description}
							>각도 조절 및 세부 조정 커스텀이 필요한 경우엔 Css 를 사용하여 커스텀 해줍니다.</span
						>
					</div>
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>shadowClass</p>
						</li>
						<span class={style.description}
							>Card Bg Color 와 대비되는 Shadow Color 를 사용하여 단일요소의 목적을 명확히 합니다. <br
							/>카드 크기 혹은 색상에 따라 shadow Color 와 inset 속성의 크기를 커스텀 합니다.</span
						>
					</div>
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>CardTitle</p>
						</li>
						<span class={style.description}>Title 에 들어갈 Text 를 입력 합니다.</span>
					</div>

					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>addTitleClass</p>
						</li>
						<span class={style.description}
							>CardTitle 의 여백지정, 혹은 추가 Class 를 입력할 수 있습니다.</span
						>
					</div>
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>addTitleStyle</p>
						</li>
						<span class="{style.description} "
							>Title 의 가독성을 높이기 위해 Card Bg Color 와 조화를 이루며 투명도에 가까운 색상을
							추출해 radial-gradient 효과를 사용하였습니다. <br />Card 의 크기에 따라 % 로 gradient
							의 크기를 조절하여 커스텀 합니다. 필요에 따라 색상도 커스텀 하여 사용합니다.</span
						>
					</div>
				</div>
			</article>
		</div>
	</section>
</div>

<style lang="postcss">
	.outline input:focus-within ~ label,
	/* 라벨 위로 올라갔을때 색상 */
	.outline input:not(:placeholder-shown) ~ label {
		@apply z-0 ml-4 -translate-x-4 -translate-y-4 scale-75 px-0 py-0;
		/* background-color: #4d505a; */
	}

	/* Input 자동완성시 백그라운드 컬러 , Text 컬러 */
	input:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 0px inset;
		-webkit-text-fill-color: #ffffff;
	}
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
	}
</style>
