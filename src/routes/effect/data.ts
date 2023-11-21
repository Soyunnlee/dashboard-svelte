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
  <div class="absolute -inset-0.5 h-4 w-4 rounded-lg dark:bg-white bg-blue-400" style="filter: blur(4px);"/>
  <div class="relative flex h-3 w-3 items-center rounded-full dark:bg-white bg-blue-400" />
</div>
 {:else} 
<div class="relative transition duration-300">
  <div class="absolute h-4 w-4" />
  <div class="relative h-3 w-3 rounded-full dark:bg-gray-600 bg-blue-200" />
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
  <div class="absolute -inset-0.5 h-4 w-4 rounded-lg dark:bg-red-600 bg-red-600" style="filter: blur(7px);"/>
  <div class="relative flex h-3 w-3 items-center rounded-full dark:bg-red-600 bg-red-600" />
</div>
 {:else} 
<div class="relative transition duration-300">
  <div class="absolute h-4 w-4" />
  <div class="relative h-3 w-3 rounded-full dark:bg-red-800 bg-red-200" />
</div>
{/if}
`,
	discription: [
		// { name: 'name1', info: 'ddd' },
	]
};
export const errorBorderEffect = {
	title: '# 1-2. Error Border Effect',
	info: 'Websoket 또는 Chart, 데이터 신호에 따른 Error Ui 효과',
	code: `<div class="relative w-56 h-14">
 <div class="absolute z-10 animate-pulse w-full h-full" style="box-shadow: 0 0 0 2px #FF0000 inset; filter:blur(2px)" />
 <div class="w-full h-full flex justify-center items-center">Content</div>
</div>`,
	discription: [
		// { name: 'name1', info: 'ddd' },
	]
};

export const errorBorderInsetEffect = {
	title: '# 1-2. Error Border Inset',
	info: 'Websoket 또는 Chart, 데이터 신호에 따른 Error Ui 효과',
	code: `<div class="relative w-52 h-12">
 <div class="absolute -inset-1 shadow-[inset_0_0_15px_#FF0000] animate-pulse flex justify-center items-center">
  Content
 </div>
</div>`,
	discription: [
		// { name: 'name1', info: 'ddd' },
	]
};
