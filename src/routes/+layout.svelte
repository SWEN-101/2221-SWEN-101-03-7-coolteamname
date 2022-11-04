<script>
	import firebase from 'firebase/app';
	import './styles.css';
	import 'firebase/auth';
	import { onMount } from 'svelte';
	onMount(() => {
		const firebaseConfig = {
			apiKey: 'AIzaSyBXej_37782qxv0yrN2BDJ9makY8cfP_cI',
			authDomain: 'stealth-e509f.firebaseapp.com',
			databaseURL: 'https://stealth-e509f-default-rtdb.firebaseio.com',
			projectId: 'stealth-e509f',
			storageBucket: 'stealth-e509f.appspot.com',
			messagingSenderId: '191445784710',
			appId: '1:191445784710:web:13c8586e7f61260a9b9907',
			measurementId: 'G-N0267Q6PF7'
		};
		firebase.initializeApp(firebaseConfig);
	});
</script>

<slot></slot>