<script>
	import { goto } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
</script>

<!-- Andy's html file -->

<body>
	<h1>Appointments</h1>
	<button
		on:click={() => {
			goto('create');
		}}>Make Appointments</button
	>
	<p />
	<button
		on:click={() => {
			goto('list');
		}}>View Appointments</button
	>
</body>
