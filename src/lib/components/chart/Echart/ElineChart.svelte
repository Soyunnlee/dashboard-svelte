<script lang="ts">
	import { onMount } from 'svelte';
	import * as echarts from 'echarts';

	let chartDom: HTMLElement;

	onMount(() => {
		const option = {
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
						backgroundColor: '#6a7985'
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
			grid: {
				left: '1%',
				right: '1%',
				bottom: '0%',
				// top: '17%',
				containLabel: true
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
					type: 'line',
					areaStyle: {},
					emphasis: {
						focus: 'series'
					},
					stack: 'total'
				},
				{
					data: [120, 132, 101, 134, 290, 230, 220],
					type: 'line',
					areaStyle: {},
					emphasis: {
						focus: 'series'
					},
					stack: 'total'
				},
				{
					data: [220, 182, 191, 234, 290, 330, 310],
					type: 'line',
					areaStyle: {},
					emphasis: {
						focus: 'series'
					},
					stack: 'total'
				}
			]
		};

		const chart = echarts.init(chartDom);
		chart.setOption(option);
	});
</script>

<div bind:this={chartDom} style="width: 100%;height:100%;" />
