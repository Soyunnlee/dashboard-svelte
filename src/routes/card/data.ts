export const cardWrap = {
	title: '# 1. CardWrap',
	info: 'Bg Color 와 대비되는 InerShadow Color 와 Effect 를 사용하여 단일요소의 목적을 명확히 합니다.',
	code: `<article 
class="rounded-xl bg-white dark:bg-[#141517] dark:shadow-[inset_0_0_10px_#4B5563] dark:shadow-gray-600 shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-56 w-72"
/>`,
	discription: [
		// { name: 'name1', info: 'ddd' },
		// { name: 'name2', info: 'xxx' }
	]
};

export const titleCard = {
	title: '# 2. Title Card',
	info: 'Title 이 있는 카드 입니다.',
	code: `<article class="h-56 w-72 rounded-xl dark:bg-[#141517] dark:shadow-inner dark:shadow-gray-600 dark:2xl:shadow-[inset_0_0_10px_#4B5563] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col">
 <!-- Title -->
 <div class="py-4 border-b border-[##DBDBDB] dark:border-none"
 style={$isDarkMode ? 
 'background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 50%, rgba(20,21,23,0) 100%);'
  : ''} >
  <div class="flex w-full items-center justify-center">
  	<p class=" text-base font-medium">Card title</p>
  </div>
 </div>
 <!-- Slot 영역 -->
 <div class="h-full flex items-center justify-center">Content</div>
</article>`,
	discription: [
		{ name: 'isDarkMode', info: '전역변수 에 따른 Css Stylte 변경' }
		// { name: 'name2', info: 'xxx' }
	]
};

export const readabilityCard = {
	title: '# 2-1. Readability Card',
	info: 'Theme 와 기본 CardWrap Color 를 고려해 조화를 이루면서도 시각적으로 구별될 수 있는 가독성 카드 입니다.',
	code: `<article class="rounded-xl dark:shadow-inner dark:shadow-gray-600 dark:2xl:shadow-[inset_0_0_10px_#4B5563] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#EEF8FF] dark:bg-[#0a1631] h-56 w-72 flex flex-col">
 <!-- Title -->
 <div class="shadow-[inset_-4px_-4px_20px_#E2EEFB] dark:shadow-none border-b border-indigo-100 dark:border-none py-4"
 style={$isDarkMode ? 
 'background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 60%, rgba(20,21,23,0) 100%);'
  : ''} >  
  <div class="flex justify-center items-center w-full">
    <p class=" text-base font-medium">Card title</p>
  </div>
 </div>
 <!-- Slot 영역 -->
 <div class="h-full flex items-center justify-center">Content</div>
</article>`,
	discription: [
		{ name: 'isDarkMode', info: '전역변수 에 따른 Css Stylte 변경' }
		// { name: 'name2', info: 'xxx' }
	]
};

export const designCardCol = {
	title: '# 3. Design Card_Col',
	info: 'Design 요소가 들어가 있는 카드 입니다.',
	code: `<article class="rounded-xl flex justify-center h-56 w-56 shadow-[0_5px_10px_rgb(0,0,0,0.2)]">
 <div class="rounded-xl relative overflow-hidden border-gray-100 w-full h-full bg-white"
 style={$isDarkMode
 ? 'background: linear-gradient(106.15deg, #282828 1.61%, #0B0B0B 93.48%)'
 : 'background: linear-gradient(106.15deg, #F5FAFF 0.5%, #ffffff 93.48%)'} >
 <!-- Content -->
  <div class=" h-full w-full flex justify-center items-center">Content</div>
 <!-- UnderLine -->
 <span class="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-opacity-100" />
 </div>
</article>`,
	discription: [
		{ name: 'isDarkMode', info: '전역변수 에 따른 Css Stylte 변경' }
		// { name: 'name2', info: 'xxx' }
	]
};

export const designCardRow = {
	title: '# 3. Design Card_Row',
	info: 'Design 요소가 들어가 있는 카드 입니다.',
	code: `<article class="rounded-xl flex justify-center h-40 w-64 shadow-[0_5px_10px_rgb(0,0,0,0.2)]" >
 <div class="rounded-xl relative overflow-hidden border-gray-100 w-full h-full bg-white"
  style={$isDarkMode
   ? 'background: linear-gradient(106.15deg, #282828 1.61%, #0B0B0B 93.48%)'
   : 'background: linear-gradient(106.15deg, #F5FAFF 0.5%, #ffffff 93.48%)'} >
  <!-- Line -->
   <span class="absolute inset-x-[97%] h-full w-3 bg-gradient-to-t from-purple-900 via-blue-500 to-green-500 bg-opacity-100" />
  <!-- Content -->
  <div class=" h-full w-full flex justify-center items-center">Content</div>
 </div>
</article>`,
	discription: [
		{ name: 'isDarkMode', info: '전역변수 에 따른 Css Stylte 변경' }
		// { name: 'name2', info: 'xxx' }
	]
};

export const dentedCard = {
	title: '# 4. Dented Card',
	info: 'CardWrap 과 Design Card 를 사용한 곂쳐진 요소의 분리된 카드 입니다.',
	code: `<!-- z-0 Wrap -->
<article
 class="mt-20 rounded-md dark:shadow-[inset_0_0_8px_#4B5563] dark:shadow-gray-600 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#F2F2F7] dark:bg-black h-72 w-[28rem]" >
 <!-- z-1 Wrap -->
 <div class="-mt-20 h-full flex justify-center">
 <!-- Design Card -->
 <div class=" h-full relative rounded overflow-hidden w-[55%] flex items-center justify-center bg-white"
	style={$isDarkMode
		? 'background: linear-gradient(106.15deg, #282828 1.61%, #0B0B0B 93.48%)'
		: 'background: linear-gradient(106.15deg, #F5FAFF 0.5%, #ffffff 93.48%)'} >
	Content
	<!-- UnderLine -->
	<span class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-opacity-100" />
  </div>
 </div>	
</article>`,
	discription: [
		{ name: 'isDarkMode', info: '전역변수 에 따른 Css Stylte 변경' }
		// { name: 'name2', info: 'xxx' }
	]
};
