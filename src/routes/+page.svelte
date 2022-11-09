<script>
	import { auth } from "./firebaseConfig";

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

<a href="/hiroto"> Go to login</a>

<button on:click={logout}>Log out</button>
