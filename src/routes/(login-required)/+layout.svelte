<!-- @author Hiroto Takeuchi -->

<script>
	import { goto } from '$app/navigation';
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { auth } from '../firebaseConfig';
	import Header from '../Header.svelte';
	onMount(()=>{
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
			} else {
				// User is signed out
				goto('/login');
			}
		});
	})
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
