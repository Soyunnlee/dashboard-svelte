<script>
	import StatusCard from './StatusCard.svelte';
	import OperationCard from './OperationCard.svelte';
	import ProductCard from './ProductCard.svelte';
	import MaintenanceCard from './MaintenanceCard.svelte';
	import LineChart from '$lib/components/chart/LineChart.svelte';
	import AiError from './AiError.svelte';
	import ElineChart from '$lib/components/chart/Echart/ElineChart.svelte';
	const style = {
		cardshadow: `bg-white dark:bg-[#141517] dark:shadow-[inset_0_0_11px_#4B5563] dark:shadow-gray-600 shadow-[0_3px_10px_rgb(0,0,0,0.2)]`
	};
	//#endrigion
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<!-- prettier-ignore -->
<div class="p-4 px-8 h-[calc(100vh-60px)] dark:bg-[#0E0E0E] space-y-3 ">
	<!-- 행 1 -->
	<section class="w-full h-[30%] flex space-x-3 ">
		<!-- 영역 1 -->
		<!-- 로봇 상태 -->
		<article class="w-[18%] rounded-xl {style.cardshadow}">
			<StatusCard />
		</article>
	
		<!-- 가동율 -->
		<article class="w-[25%] rounded-xl {style.cardshadow}">
			<OperationCard/>
		</article>
		<!-- 생산 -->
		<article class=" w-[28%] rounded-lg mt-10 h-auto {style.cardshadow}">
			<ProductCard/>
		</article>

		<article class="bg-[#141517] w-[27%] rounded-xl {style.cardshadow}">
			<MaintenanceCard/>
		</article>
	</section>

	<!-- 행 2 -->
	<section class="w-full h-[35%] flex space-x-3 ">
		<article class="bg-[#141517] rounded-lg w-full pt-1 pb-2 px-2 h-full {style.cardshadow}">
			<!-- <LineChart/> -->
			<ElineChart/>
		</article>
	</section>

	
	<!-- 행 3 -->
	<section class="w-full h-[calc(100%-65%-28px)] flex">
    <article
	class="flex  rounded-lg w-full flex-col {style.cardshadow} "
>
<AiError />

</article>
	</section>
</div>
