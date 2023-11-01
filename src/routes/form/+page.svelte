<script script lang="ts">
	//#region Import

	import Article from '$lib/components/article/Article.svelte';
	import Intro from '$lib/components/article/Intro.svelte';
	import LoginForm from '$lib/components/form/LoginForm.svelte';

	import { form } from './data';
</script>

<svelte:head>
	<title>Form</title>
</svelte:head>

<!-- <article class="contianer grid bg-white">
	<div class="row-span-1">
		<LoginForm />
	</div>
</article> -->

<div class="h-[calc(100vh-60px)] px-8">
	<section class="mb-3 px-3 py-5">
		<!-- Intro -->
		<Intro
			title="Form"
			intro="로그인 양식, 등록 양식 등에 대한 반응형 필드 스타일을 제공합니다.<br/>구성 요소의 스타일을 재정의 할 수 있습니다."
		/>
		<!-- Articles -->
		<div class="space-y-8">
			<!-- 1. Card Wrap -->
			<Article title={form.title} info={form.info} code={form.code} discription={form.discription}>
				<LoginForm />
			</Article>
		</div>
	</section>
</div>
