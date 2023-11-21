<script lang="ts">
	export let ErrorState: 'Error' | 'Nomal';
	let blinkInterval = 1;

	setInterval(() => {
		blinkInterval = (blinkInterval % 2) + 1;
	}, 1000);
</script>

<div>
	<!-- 정상 표시 Icon-->
	{#if ErrorState === 'Nomal'}
		<div>
			{#if blinkInterval === 1}
				<div class="relative transition duration-300">
					<div
						class="absolute -inset-0.5 rounded-lg h-4 w-4 dark:bg-white bg-blue-400"
						style="filter: blur(5px);"
					/>
					<div
						class="relativeflex items-center divide-x divide-gray-600 rounded-full h-3 w-3 dark:bg-white bg-blue-400"
					/>
				</div>
			{:else}
				<div class="relative transition duration-300">
					<div class="h-4 w-4 absolute" />
					<div class="h-3 w-3 rounded-full relative dark:bg-gray-600 bg-blue-200" />
				</div>
			{/if}
		</div>
	{:else}
		<!-- 에러 표시 Icon -->
		<div>
			{#if blinkInterval === 1}
				<div class="relative transition duration-300">
					<div
						class="absolute -inset-0.5 rounded-lg h-4 w-4 dark:bg-red-600 bg-red-600"
						style="filter: blur(5px);"
					/>
					<div
						class="relative flex items-center divide-x rounded-full h-3 w-3 dark:bg-red-600 bg-red-600"
					/>
				</div>
			{:else}
				<div class="relative transition duration-300">
					<div class="h-4 w-4 absolute" />
					<div class="h-3 w-3 rounded-full relative dark:bg-red-800 bg-red-200" />
				</div>
			{/if}
		</div>
	{/if}
</div>
