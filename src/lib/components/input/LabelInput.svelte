<script lang="ts">
	//#region property
	// 입력 타입
	// export let type: string;
	// Element 명
	// export let inputName: string;
	// CSS Style
	// export let style: string;
	// placeholder 표시 문자열
	export let placeholder: string;
	//#endregion
</script>

<div
	class="relative mb-0 rounded-md outline outline-1 outline-gray-300 backdrop-blur-md dark:bg-[#0E0E0E]"
>
	<input
		placeholder=" "
		type="text"
		name="userId"
		class="block w-full appearance-none rounded-md border-0 bg-transparent p-2 pl-3 text-lg focus:outline-none"
	/>

	<label class="origin-0 absolute top-1 -z-10 rounded-md duration-300 pt-1.5 pl-2" for="userId">
		<span class="dark:bg-[#0E0E0E] duration-0 px-1 bg-inherit"> {placeholder} </span>
	</label>
</div>

<style lang="postcss">
	.outline input:focus-within ~ label,
	/* 라벨 위로 올라갔을때 위치 */
	.outline input:not(:placeholder-shown) ~ label {
		@apply z-0 ml-4 -translate-x-4 -translate-y-4 scale-75 px-0 py-0;
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
