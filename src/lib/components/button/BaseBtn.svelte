<script lang="ts">
	// Button 타입
	export let type: 'submit' | 'button' | 'reset' | undefined = undefined;
	// Button 텍스트
	export let caption: string | undefined = undefined;
	// 추가 클래스
	export let addClass: string | undefined = undefined;
	// 추가 style
	export let addStyle: string | undefined = undefined;
	// Button 클릭 이벤트 처리기
	export let onClick: (event: MouseEvent) => void = () => {};
	// #endregion
</script>

<button {type} class={addClass} style={addStyle} on:click={onClick}>
	{caption}
	<slot />
</button>
