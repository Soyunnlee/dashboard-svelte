<script lang="ts">
	//#region Import
	import { enhance } from '$app/forms';
	import { isDarkMode } from '../../../dashboard/provider/store';
	import BaseBtn from '../button/ButtonBase.svelte';
	//#endregion

	//#region State
	//#endregion

	//#region Variable
	//#endregion

	//#region Event Listener
	//#endregion
</script>

<!-- Form Background Color -->
<div
	class="rounded-xl bg-white dark:bg-gray-800 px-16 py-10 shadow-lg backdrop-blur-md text-lg dark:text-white"
	style="min-width:450px; width:31%; max-width:510px"
>
	<!-- Form Text Size, Color -->
	<form use:enhance method="POST">
		<!-- src="https://i.esdrop.com/d/f/KRQCESGJO3/WqCTMLOZvO.png" -->
		<!-- Logo -->
		<div class=" flex justify-center">
			<img
				class="my-12 w-72"
				src={$isDarkMode
					? 'https://i.esdrop.com/d/f/KRQCESGJO3/JVY3MWknS9.png'
					: 'https://i.esdrop.com/d/f/KRQCESGJO3/WqCTMLOZvO.png'}
				alt="logo"
			/>
		</div>

		<p class="mb-4">Please login to your account</p>
		<!-- Input -->
		<div class="space-y-5 mb-12">
			<!-- Id Input -->
			<div class="relative mb-0 rounded-md outline outline-1 outline-gray-300">
				<input
					placeholder=" "
					type="text"
					name="userId"
					class="block w-full appearance-none rounded-md border-0 bg-transparent p-2 pl-3 text-lg focus:outline-none"
				/>

				<label
					class="origin-0 absolute top-0 -z-10 rounded-md duration-300 pt-1.5 pl-2"
					for="userId"
				>
					<span class="dark:bg-gray-800 bg-white duration-0 px-1"> ID </span>
				</label>
			</div>
			<!-- PassWord Input -->
			<div class="relative mb-0 rounded-md outline outline-1 outline-gray-300">
				<input
					placeholder=" "
					type="password"
					name="password"
					class="block w-full appearance-none rounded-md border-0 bg-transparent p-2 pl-3 text-lg focus:outline-none"
				/>
				<label
					class="origin-0 absolute top-0 -z-10 rounded-md duration-300 pt-1.5 pl-2"
					for="userId"
				>
					<span class="dark:bg-gray-800 bg-white duration-0 px-1"> Password </span>
				</label>
			</div>

			<!-- LoginBtn -->
			<BaseBtn type="button" caption="LOG IN" addClass="py-2.5 w-full btn-blue text-sm" />

			<div class="text-center">
				<a href="#!">Forgot password?</a>
			</div>
		</div>

		<div class="flex items-center justify-between pb-6">
			<p class="">Don't have an account?</p>
			<!-- 레지스터 버튼 -->
			<BaseBtn type="button" caption="RESISTER" addClass="btn-red px-6 py-2.5 text-sm" />
		</div>
	</form>
</div>

<style lang="postcss">
	.outline input:focus-within ~ label,
	/* 라벨 위로 올라갔을때 색상 */
	.outline input:not(:placeholder-shown) ~ label {
		@apply z-0 ml-4 -translate-x-4 -translate-y-4 scale-75 px-0 py-0;
		/* background-color: #4d505a; */
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
