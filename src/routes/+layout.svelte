<script>
	import { getApps } from 'firebase/app';
	import './styles.css';
	import 'firebase/auth';
	import { onMount } from 'svelte';
	import { app } from '../lib/firebaseConfig';
	onMount(() => {
		if (!getApps().length) {
			app;
		}
	});
	// const firebase = require('firebase');
	// // Required for side-effects
	// require('firebase/firestore');
</script>

<slot />
