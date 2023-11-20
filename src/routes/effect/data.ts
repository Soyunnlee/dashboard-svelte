export const whiteBlinkDot = {
	title: '# 1-1. White Blink Dot',
	info: 'Websoket 또는 데이터 신호에 따른 Ui 효과<br />색상 정의에 따라 ( 정상연결 , 작동중 , 에러 등 ) 통신상태 UI 효과를 나타냅니다.',
	code: `<script lnag="ts">
 let blinkInterval = 1;
 // Interval Function
 setInterval(() => {
   blinkInterval = (blinkInterval % 2) + 1;
 }, 1000);
</script>

{#if blinkInterval === 1}
<div class="relative transition duration-300">
  <div class="absolute -inset-0.5 h-4 w-4 rounded-lg bg-white" style="filter: blur(4px);"/>
  <div class="relative flex h-3 w-3 items-center rounded-full bg-white" />
</div>
 {:else} 
<div class="relative transition duration-300">
  <div class="absolute h-4 w-4" />
  <div class="relative h-3 w-3 rounded-full bg-gray-600" />
</div>
{/if}
`,
	discription: [
		// { name: 'name1', info: 'ddd' },
	]
};

export const redBlinkDot = {
	title: '# 1-2. Red Blink Dot',
	info: 'Websoket 또는 데이터 신호에 따른 Ui 효과<br />색상 정의에 따라 ( 정상연결 , 작동중 , 에러 등 ) 통신상태 UI 효과를 나타냅니다.',
	code: `<script lnag="ts">
 let blinkInterval = 1;
 // Interval Function
 setInterval(() => {
   blinkInterval = (blinkInterval % 2) + 1;
 }, 1000);
</script>

{#if blinkInterval === 1}
<div class="relative transition duration-300">
  <div class="absolute -inset-0.5 h-4 w-4 rounded-lg bg-red-600" style="filter: blur(7px);"/>
  <div class="relative flex h-3 w-3 items-center rounded-full bg-red-600" />
</div>
 {:else} 
<div class="relative transition duration-300">
  <div class="absolute h-4 w-4" />
  <div class="relative h-3 w-3 rounded-full bg-red-800" />
</div>
{/if}
`,
	discription: [
		// { name: 'name1', info: 'ddd' },
	]
};
