<script>
	import { onMount } from 'svelte';

	let chart;

	onMount(() => {
		import('echarts').then((echarts) => {
			chart = echarts.init(document.getElementById('chart'));

			var option;
			var now = new Date(1997, 9, 3);
			var oneDay = 24 * 3600 * 1000;
			var value = Math.random() * 1000;
			var data = [];

			function randomData() {
				now = new Date(+now + oneDay);
				value = value + Math.random() * 21 - 10;
				return {
					name: now.toString(),
					value: [
						[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
						Math.round(value)
					]
				};
			}

			for (var i = 0; i < 1000; i++) {
				data.push(randomData());
			}

			option = {
				// title: {
				// 	text: 'Dynamic Data & Time Axis'
				// },
				grid: {
					left: '0%',
					right: '1%',
					bottom: '0%',
					top: '0%',
					containLabel: true
				},
				tooltip: {
					trigger: 'axis',
					formatter: function (params) {
						params = params[0];
						var date = new Date(params.name);
						return (
							date.getDate() +
							'/' +
							(date.getMonth() + 1) +
							'/' +
							date.getFullYear() +
							' : ' +
							params.value[1]
						);
					},
					axisPointer: {
						animation: false
					}
				},
				xAxis: {
					type: 'time',
					splitLine: {
						show: false
					}
				},
				yAxis: {
					type: 'value',
					boundaryGap: [0, '100%'],
					splitLine: {
						show: false
					}
				},
				series: [
					{
						name: 'Fake Data',
						type: 'line',
						showSymbol: false,
						data: data
					}
				]
			};

			// 차트 렌더링
			chart.setOption(option);

			// 데이터 업데이트
			setInterval(() => {
				for (var i = 0; i < 5; i++) {
					data.shift();
					data.push(randomData());
				}
				chart.setOption({
					series: [
						{
							data: data
						}
					]
				});
			}, 1000);
		});
	});
</script>

<div id="chart" style="width: 100%;height:100%;" />
