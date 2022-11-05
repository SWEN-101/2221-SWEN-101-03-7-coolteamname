<!-- @author Hiroto: Login Page -->
<script>
	import { goto } from '$app/navigation';
	import logo from '$lib/images/logo.png';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { auth } from '../firebaseConfig';

	/**
	 * @type {undefined}
	 */
	let errorCode = undefined;
	/**
	 * @type {undefined}
	 */
	let errorMessage = undefined;

	$: email = '';
	$: password = '';
	$: emailFocus = false;
	$: passwordFocus = false;

	const onEmailFocus = () => (emailFocus = true);
	const onEmailBlur = () => (emailFocus = false);
	const onPasswordFocus = () => (passwordFocus = true);
	const onPasswordBlur = () => (passwordFocus = false);
	const submit = () => {
		console.log(auth);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				goto('/');
				// ...
			})
			.catch((error) => {
				errorCode = error.code;
				errorMessage = error.message;
			});
	};
	$: if (errorCode == 'auth/user-not-found') {
		// @ts-ignore
		errorMessage = 'User not found';
	}
</script>

<svelte:head>
	<title>Stealth - Login</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>
<main>
	<div class="box">
		<div class="box-title">
			<img src={logo} alt="logo" />
			<h1>Stealth</h1>
		</div>
		<div class="box-form">
			<form id="signIn" autocomplete="on" novalidate>
				<div class="form-group">
					<label for="email" class:out={emailFocus || email != ''}>Email</label>
					<input
						type="email"
						name="email"
						id="email"
						required
						autocomplete="email"
						on:focus={onEmailFocus}
						on:blur={onEmailBlur}
						bind:value={email}
					/>
				</div>
				<div class="form-group">
					<label for="password" class:out={passwordFocus || password != ''}>Password</label>
					<input
						type="password"
						name="password"
						id="password"
						required
						minlength="8"
						maxlength="80"
						autocomplete="current-password"
						on:focus={onPasswordFocus}
						on:blur={onPasswordBlur}
						bind:value={password}
					/>
				</div>
				<div class="form-group">
					<button on:click|preventDefault={submit}>LOGIN</button>
				</div>
			</form>
			<div class="other-option">
				<a href="/forgot-password">Forgot Password?</a>
				<a href="/register">Sign up</a>
			</div>
		</div>
	</div>

	{#if errorCode}
		<div class="error">
			<p>{errorMessage}</p>
		</div>
	{/if}
</main>

<style>
	h1 {
		margin-bottom: 0.5rem;
	}
	main {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	div.box {
		height: 350px;
		width: 360px;
		background-color: var(--color-theme-1);
		border: 1px solid black;
		border-radius: 1rem;
		padding: 0 2rem;
	}

	.form-group > input,
	button {
		box-sizing: border-box;
		font-size: 1.15rem;
		width: 100%;
		height: 2.5rem;
		border-radius: 0.5rem;
		border: 2px solid var(--color-theme-2);
		padding: 0 1rem;
	}

	.form-group > label {
		position: absolute;
		font-size: 1.15rem;
		top: 0.75rem;
		left: 0.75rem;
		transition: all 0.2s ease-in-out;
	}

	.form-group {
		position: relative;
		margin: 2rem 0;
	}

	label.out {
		top: -1.5rem;
		left: 0;
	}
	.form-group:has(button) {
		margin: -0.75rem 0;
	}

	button {
		background-color: grey;
		border: 2px solid grey;
		color: var(--color-theme-1);
		font-weight: 600;
		letter-spacing: 1px;
		color: white;
	}

	button:hover {
		animation: pulse-animation 1.5s infinite;
	}

	button:active {
		animation-duration: 0.5s;
	}

	@keyframes pulse-animation {
		0% {
			box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
		}
		100% {
			box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		}
	}

	.other-option {
		color: grey !important;
		display: flex;
		justify-content: space-between;
		margin-top: 2.5rem;
	}

	a:hover {
		text-decoration: underline;
	}

	.box-title {
		position: relative;
	}

	img {
		position: absolute;
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 50%;
		left: 1rem;
	}

	.error {
		width: 360px;
		color: red;
		padding: 0.5rem;
		border-radius: 1rem;
	}

	.error > p {
		margin: 0;
	}
</style>
