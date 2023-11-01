<script lang="ts">
	//#region Import
	import { enhance } from '$app/forms';

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
	class="rounded-xl bg-gray-800 px-16 py-10 shadow-lg backdrop-blur-md text-lg text-white"
	style="min-width:450px; width:31%; max-width:510px"
>
	<!-- Form Text Size, Color -->
	<form use:enhance method="POST">
		<!-- src="https://i.esdrop.com/d/f/KRQCESGJO3/9kUoRExaf7.png" -->
		<!-- Logo -->
		<div class=" flex justify-center">
			<img class="my-12 w-72" src="https://i.esdrop.com/d/f/KRQCESGJO3/JVY3MWknS9.png" alt="logo" />
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
					class="origin-0 absolute top-0 -z-10 p-2 pl-4 text-lg text-white duration-300"
					for="userId">ID</label
				>
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
					class="origin-0 absolute top-0 -z-10 p-2 pl-4 text-lg text-white duration-300"
					for="userId">Password</label
				>
			</div>

			<!-- LoginBtn -->
			<button
				type="button"
				class="w-full mb-5 text-sm py-2.5 rounded"
				style="background: linear-gradient(270deg, #66a6ff 0%, #667eea 98.8%)">LOG IN</button
			>

			<div class="text-center">
				<a href="#!">Forgot password?</a>
			</div>
		</div>

		<div class="flex items-center justify-between pb-6">
			<p class="">Don't have an account?</p>
			<!-- 레지스터 버튼 -->
			<button
				type="button"
				class="px-6 py-2.5 text-sm rounded bg-red-600 text-white hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
				>RESISTER</button
			>
		</div>
	</form>
</div>

<style lang="postcss">
	.outline input:focus-within ~ label,
	/* 라벨 위로 올라갔을때 색상 */
	.outline input:not(:placeholder-shown) ~ label {
		@apply z-0 ml-4 -translate-x-4 -translate-y-4 scale-75 transform bg-gray-700 px-1  py-0;
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
