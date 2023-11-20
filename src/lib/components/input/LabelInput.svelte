<script lang="ts">
	import { isDarkMode } from '../../../dashboard/provider/store';
	//#region property
	// 입력 타입
	// export let type: string;
	// Element 명
	// export let inputName: string;
	// CSS Style
	export let labelColor: string;
	// placeholder 표시 문자열
	export let placeholder: string;
	//#endregion
</script>

<div class="relative mb-0 rounded-md outline outline-1 outline-gray-300 backdrop-blur-md">
	<input
		placeholder=" "
		type="text"
		name="userId"
		class="block w-full rounded-md border-0 p-2 pl-3 text-lg focus:outline-none bg-inherit"
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
	/* Input 자동완성시 백그라운드 컬러 , Text 컬러 */
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
	}
</style>
