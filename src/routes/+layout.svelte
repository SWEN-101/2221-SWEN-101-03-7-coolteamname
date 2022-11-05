<script>
	import { getApps } from 'firebase/app';
	import './styles.css';
	import 'firebase/auth';
	import { onMount } from 'svelte';
	import { app } from './firebaseConfig';
	onMount(() => {
		if (!getApps().length) {
			app;
		}
	});
</script>

<slot />
