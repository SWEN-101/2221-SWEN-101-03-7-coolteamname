<script lang="ts">
	import { auth } from '../lib/firebaseConfig';
	import Header from '$lib/components/Header.svelte';
	import type { PageServerData } from '../../.svelte-kit/types/src/routes/$types';
	import { onMount } from 'svelte';

	export let data: PageServerData;

	function logout() {
		auth.signOut().then(() => {
			console.log('logged out');
		});
	}
	// let data;
	// console.log(auth.currentUser.uid)
	// let doc = 'users/' + 'mzsY3Ge8HbQGGNzpRD2bAb2yKUR2' + '/name';
	$: onMount(() => {
		console.log(data);
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<Header />
<a href="/login"> Go to login</a>

<button on:click={logout}>Log out</button>

{data.prop[0]?.data.name.first}
{data.prop[0]?.data.name.last}
