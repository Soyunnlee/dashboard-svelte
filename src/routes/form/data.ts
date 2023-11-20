export const labelInput = {
	title: '#1. Label Input',
	info: 'ID , 암호 , 텍스트, 숫자 등 데이터 입력 작업을 수행하는 사용자 인터페이스를 제공 합니다.<br/>데이터 입력 작업을 수행 할 경우 Label 이 위로 올라가 입력해야 할 Text 정보를 나타내주는 Label Input 입니다.',
	code: `<script lang="ts">
 import { isDarkMode } from '$lib/provider/store'; 
 export let placeholder : string;
 export let type : string;
 export let labelColor: string;
</script>

<div class="relative mb-0 rounded-md outline outline-1 outline-gray-300 backdrop-blur-md dark:bg-[#0E0E0E]">
 <input
  placeholder=" "
  {type}
  name="userId"
  class="block rounded-md border-0 p-2 pl-3 text-lg focus:outline-none bg-inherit w-full"
	style="-webkit-text-fill-color:{$isDarkMode ? 'white' : 'black'}"
 />

 <label class="origin-0 absolute top-1 -z-10 rounded-md duration-300 pt-1.5 pl-2" for="userId">
  <span class="px-2 {labelColor}"> {placeholder} </span>
 </label>
</div>

<style lang="postcss">
/* Label Focus Position */
.outline input:focus-within ~ label,
.outline input:not(:placeholder-shown) ~ label {
 @apply z-0 ml-4 -translate-x-4 -translate-y-4 scale-75 px-0 py-0;
}

/* Input 자동완성시 백그라운드 컬러 */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
 transition: background-color 5000s ease-in-out 0s;
}
</style>`,
	discription: [
		{ name: 'isDarkMode', info: '전역변수 에 따른 Css Stylte 변경' },
		{
			name: 'placeholder',
			info: 'input 의 placeholder를 입력 합니다.'
		},
		{ name: 'type', info: 'Input 의 Type 을 지정 합니다.' },
		{ name: 'labelColor', info: 'Label 의 Background Color 를 지정합니다.' }
	]
};

export const form = {
	title: '#2. Form',
	info: 'Input 은 Label Input 을 적용했습니다.<br/>Btn 은 Blue, Red Btn 을 적용했습니다.',
	code: `<script lang="ts">
 import { enhance } from '$app/forms';
 import { isDarkMode } from '../../../dashboard/provider/store';
 import BaseBtn from '../button/ButtonBase.svelte';
 import LabelInput from '../input/LabelInput.svelte';
</script>

<!-- Form Wrap -->
<div class="rounded-xl bg-white dark:bg-gray-800 px-16 py-10 shadow-lg backdrop-blur-md dark:text-white"
 style="min-width:450px; width:31%; max-width:510px">
 <!-- Form -->
 <form use:enhance method="POST">
 <!-- Logo -->
  <div class=" flex justify-center">
  	<img class="my-12 w-72"
      src={$isDarkMode ? 
      'https://i.esdrop.com/d/f/KRQCESGJO3/JVY3MWknS9.png' : 
      'https://i.esdrop.com/d/f/KRQCESGJO3/WqCTMLOZvO.png'}
      alt="logo"
  	/>
  </div>
 
  <p class="mb-4 text-lg">Please login to your account</p>
 
 <!-- Input , LoginBtn -->
  <div class="space-y-5 mb-12">
  	<LabelInput placeholder="ID" labelColor="dark:bg-gray-800" />
  	<LabelInput placeholder="Password" labelColor="dark:bg-gray-800" />
  	<!-- LoginBtn -->
  	<BaseBtn type="button" caption="LOG IN" addClass="py-2.5 w-full btn-blue text-sm" />
  	<div class="text-center text-lg">
		 <a href="#!">Forgot password?</a>
  	</div>
  </div>
 
 <!-- Register Group -->
  <div class="flex items-center justify-between pb-6">
  	<p class="text-lg">Don't have an account?</p>
  	<!-- RegisterBtn -->
  	<BaseBtn type="button" caption="RESISTER" addClass="btn-red px-6 py-2.5 text-sm" />
  </div>
 </form> 
</div>
  `,
	discription: [{ name: 'isDarkMode', info: '전역변수 에 따른 Css Stylte 변경' }]
};
