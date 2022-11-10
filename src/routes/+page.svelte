<script>
	import { auth } from "../lib/firebaseConfig";
	import Header from "$lib/components/Header.svelte";

	function logout(){
		auth.signOut().then(
			() => {
				console.log("logged out");
			}
		);
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<Header />

<a href="/login"> Go to login</a>

<button on:click={logout}>Log out</button>
