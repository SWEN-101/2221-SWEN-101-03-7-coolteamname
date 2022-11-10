<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
	import logo from '$lib/images/logo.png';
	import { fade } from 'svelte/transition';
	import Profile from './Profile-image.svelte';
	
	let y;
	let listLink = {
		Home: '/',
		login: '/login',
		Jeremy: '/jeremy',
		Justin: '/justin',
		Katie: '/katie',
		Andy: '/andy',
		Peter: '/peter'
	};

    export let defaultShrink = false;

	$: shrink = defaultShrink || y != 0;
	$: path = $page.url.pathname
	$: isHome = path === '/';
	$: key = Object.keys(listLink).find(key => listLink[key] === path);
</script>
<svelte:head>
	<title>Stealth - {key}</title>
</svelte:head>
<svelte:window bind:scrollY={y} />

<header class:shrink>
	<div class="main-box">
        <div class="title">
            <img alt="logo" src={logo} />
            <slot name='title'>
                {#if isHome}
                    <h1>Stealth</h1>
                {:else}
                    <h1>{key}</h1>
                {/if}
            </slot>
        </div>
        <slot name='profile'>
            <Profile />
		</slot>
	</div>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		background-color: var(--color-theme-1);
		position: sticky;
		top: 0;
		height: 6rem;
		transition: height 0.2s;
	}

	header.shrink {
		height: 4rem;
	}

	.main-box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem 0 0;
	}

	.title {
		display: flex;
		flex-direction: row;
	}

	img {
		height: 3rem;
		margin-top: 0.3rem;
		margin-left: 0.5rem;
	}

	h1 {
		margin: 0.5rem;
	}
</style>
