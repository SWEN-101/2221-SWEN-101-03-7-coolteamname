<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
	import logo from '$lib/images/logo.png';
	import { fade } from 'svelte/transition';
	import Profile from './Profile-image.svelte';
	let y=0;
	let listLink = {
		"Home": '/',
		"Login": '/login',
		"Info": '/jeremy',
		"Nearby Hospitals": '/justin',
		"Profile": '/katie',
		"Appointment Info": '/andy',
		"Appointments": '/andy/list',
		"Make Appointments": '/andy/create',
		"Confirm": '/andy/confirm',
		"Medical Info": '/peter'
	};

	$: shrink = y != 0;
	$: path = $page.url.pathname
	$: isHome = path === '/';
	$: key = Object.keys(listLink).find(key => listLink[key] === path);

	let navList = {
		"Home": "/",
		"Login": "/login",
		"Info": "/jeremy",
		"Appointment": "/andy",
		"Nearby Hospitals": "/justin",
		"Profile": "/katie",
		"Medical Info": "/peter"
	}
</script>
<svelte:head>
	<title>Stealth - {key}</title>
</svelte:head>
<svelte:window bind:scrollY={y} />

<header class:shrink>
	<div class="main-box">
		<div class="title">
			<img alt="logo" src={logo} />
			{#if isHome}
				<h1>Stealth</h1>
			{:else}
				<h1>{key}</h1>
			{/if}
		</div>
		{#if shrink}
			<div class="links" transition:fade={{ duration: 100 }}>
				{#each Object.keys(navList) as link}
					<a href={navList[link]}>{link}</a>
					<div class="divider" />
				{/each}
			</div>
		{/if}
		<Profile />
	</div>
	{#if !shrink}
		<div class="links-bottom" transition:fade={{ duration: 100 }}>
			{#each Object.keys(navList) as link}
				<a href={navList[link]}>{link}</a>
				<div class="divider" />
			{/each}
		</div>
	{/if}
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
		z-index: 1;
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

	a {
		color: var(--color-theme-2);
		text-decoration: underline;
	}

	div.links {
		display: flex;
		flex-grow: 1;
		padding: 1rem;
		justify-content: flex-end;
	}

	div.links-bottom {
		display: flex;
		flex-grow: 1;
		padding-left: 1em;
	}

	.divider {
		margin: 0.75em;
		margin-top: 0;
		height: 1.15rem;
		width: 2px;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 1px;
	}

	.divider:last-child {
		display: none;
	}
</style>
