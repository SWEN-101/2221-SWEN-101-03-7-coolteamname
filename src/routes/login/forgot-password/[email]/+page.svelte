<script lang="ts">
	import { sendPasswordResetEmail } from 'firebase/auth';
	import { auth } from '$lib/firebaseConfig';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;
	
	let email = data.post.email
	let errorCode:string|undefined;
	let errorMessage:string|undefined;

	let relief = false;
	onMount(()=>{
		setInterval(() => {
			relief = true;
		}, 4000);
	})

	function send(){
		sendPasswordResetEmail(auth, email)
			.then(() => {
				errorCode = undefined;
				errorMessage = undefined;
			})
			.catch((error) => {
				errorCode = error.code;
				errorMessage = error.message;
				// ..
			});
	}

</script>

{#if relief}
	<div class="center">
		<p>Thats really unfortunate</p>
	</div>
{:else if !errorCode}
	<div class="center">
		<p>JK, check your email({email})</p>
		<button on:click={send}> resend? </button>
	</div>
{:else}
	<div class="center">
		<p>JK, we couldn't find your email({email})</p>
		<input bind:value={email} />
		<button on:click={send}> resend? </button>
	</div>
{/if}

<style>
	.center {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
