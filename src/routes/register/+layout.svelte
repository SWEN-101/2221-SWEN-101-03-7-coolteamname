<script>
	// @ts-nocheck

	import EmptyHeader from '../EmptyHeader.svelte';
</script>

<!-- @author Hiroto signup page -->

<EmptyHeader defaultShrink={true}>
	<div slot="title">
		<h1>Sign Up</h1>
	</div>

	<div slot="link" />

	<span slot="profile" />
</EmptyHeader>

<slot />


<style>
    h1 {
        margin: 0.5rem;
    }
</style>