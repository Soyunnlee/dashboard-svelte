<script lang="ts">
	//#region Import
	import { enhance } from '$app/forms';
	import { isDarkMode } from '../../../dashboard/provider/store';
	import BaseBtn from '../button/ButtonBase.svelte';
	import LabelInput from '../input/LabelInput.svelte';
	//#endregion

	//#region State
	//#endregion

	//#region Variable
	//#endregion

	//#region Event Listener
	//#endregion
</script>

<!-- Form Wrap -->
<div
	class="rounded-xl bg-white dark:bg-gray-800 px-16 py-10 shadow-lg backdrop-blur-md dark:text-white"
	style="min-width:450px; width:31%; max-width:510px"
>
	<!-- Form -->
	<form use:enhance method="POST">
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
			<!-- 레지스터 버튼 -->
			<BaseBtn type="button" caption="RESISTER" addClass="btn-red px-6 py-2.5 text-sm" />
		</div>
	</form>
</div>
