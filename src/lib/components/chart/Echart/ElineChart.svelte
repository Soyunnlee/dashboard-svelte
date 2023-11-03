<script lang="ts">
	import { onMount } from 'svelte';
	import * as echarts from 'echarts';

	let chartDom: HTMLElement;
	let chartControl: echarts.ECharts;
	// #region Handle Click Btn
	let btnLabels = ['This month', 'Last month', '2 month ago'];
	let selectedBtn = btnLabels[0];
	function handleButtonClick(item: string) {
		selectedBtn = item;
	}
	// #endregion

	onMount(() => {
		const option = {
			grid: {
				left: '8%',
				right: '1%',
				bottom: '0%',
				containLabel: true
			},
			title: {
				text: 'Threshold',
				top: '4%',
				left: '0.2%',
				textStyle: {
					color: '#ffffff',
					fontWeight: 'normal'
				}
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985',
						precision: 'middle'
					}
				}
			},
			legend: {
				data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
			},
			toolbox: {
				top: '2.5%',
				right: '0.5%',
				iconStyle: {
					borderColor: '#ffffff',
					borderWidth: 1.5
				},
				feature: {
					saveAsImage: {}
				}
			},

			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				boundaryGap: false
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					// data: data,
					type: 'line',
					areaStyle: {},
					emphasis: {
						focus: 'series'
					},
					stack: 'total'
				},
				{
					data: [120, 132, 101, 134, 290, 230, 220],
					// data: data,
					type: 'line',
					areaStyle: {},
					emphasis: {
						focus: 'series'
					},
					stack: 'total'
				},
				{
					data: [220, 182, 191, 234, 290, 330, 310],
					// data: data,
					type: 'line',
					areaStyle: {},
					emphasis: {
						focus: 'series'
					},
					stack: 'total'
				}
			]
		};

		chartControl = echarts.init(chartDom);
		chartControl.setOption(option);
	});
</script>

<div class=" h-full w-full">
	<!-- buttons -->
	<div class="relative z-10">
		<div class="absolute top-20 left-[0.5%] flex flex-col space-y-3 2xl:top-24 2xl:left-[1%]">
			{#each btnLabels as item, i}
				<div class="flex flex-col">
					<button
						on:click|preventDefault={() => {
							handleButtonClick(item, i);
						}}
						class:selected={item == selectedBtn}
						class="border border-gray-700 py-1.5 2xl:px-2 px-1 rounded bg-neutral-900 text-sm"
					>
						{item}
					</button>
				</div>
			{/each}
		</div>
	</div>
	<!-- Chart -->
	<div bind:this={chartDom} style="width: 100%;height:100%;" class="" />
</div>

<style lang="postcss">
	button.selected {
		@apply bg-black;
	}
</style>
