<script>
	import { goto } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
</script>

<!-- Andy's html file -->

<body>
	<h1>
		<p>Current appointments</p>
	</h1>
	<hr />

	<h4>
		<p>Appointment 1</p>
		<h5>
			<p>first name</p>
			<p>last name</p>
			<p>reason for visit</p>
			<p>hospital</p>
			<p>doctor</p>
			<p>date</p>

			<p>time</p>
		</h5>

		<hr />

		<p>Appointment 2</p>
		<h5>
			<p>first name</p>
			<p>last name</p>
			<p>reason for visit</p>
			<p>hospital</p>
			<p>doctor</p>
			<p>date</p>

			<p>time</p>
		</h5>

		<hr />

		<p>Appointment 3</p>
		<h5>
			<p>first name</p>
			<p>last name</p>
			<p>reason for visit</p>
			<p>hospital</p>
			<p>doctor</p>
			<p>date</p>

			<p>time</p>
		</h5>

		<hr />

		<p>Appointment 4</p>
		<h5>
			<p>first name</p>
			<p>last name</p>
			<p>reason for visit</p>
			<p>hospital</p>
			<p>doctor</p>
			<p>date</p>

			<p>time</p>
		</h5>

		<hr />

		<h2>Make a new appointment</h2>

		<button
			on:click={() => {
				goto('create');
			}}>Make another appointment</button
		>
	</h4></body
>
