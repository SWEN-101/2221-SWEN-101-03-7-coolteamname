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

<div class="center">
    <a class="a" href="/login"> Go to login</a>

    <button class="a" on:click={logout}>Log out</button>
</div> 
<div class="center">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="https://techcrunch.com/wp-content/uploads/2020/09/GettyImages-1211152561.jpg?w=713" alt="Healthcare photo">
    <p class="bold">Streamlined HealthCare</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu. Dignissim sodales ut eu sem integer vitae. Duis at tellus at urna. </p>
</div>

<style>
    .bold {
        font-weight: bold; 
    }
    .a{
        background-color: grey;
        border: none; 
        color: white; 
        padding: 15px 32px; 
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center; 
        text-decoration: none; 
        display: inline-block; 
        font-size: 16px;
    }
    .center {
        text-align: center; 
    }
</style>