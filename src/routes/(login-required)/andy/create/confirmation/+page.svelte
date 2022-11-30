<script>
	import { goto } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
</script>

<!-- Andy's html file -->

<body>
	<h1>
		<p>You have successfully made an appointment</p>

		<button
			on:click={() => {
				goto('../../create');
			}}>Make another appointment</button
		>
		<button
			on:click={() => {
				goto('../../list');
			}}>View appointments</button
		>
	</h1>
</body>
