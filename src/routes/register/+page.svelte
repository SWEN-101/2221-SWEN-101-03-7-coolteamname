<!-- @author Hiroto: Login Page -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import logo from '$lib/images/logo.png';
	import google from '$lib/images/google-logo.png';
	import {
		createUserWithEmailAndPassword,
		GoogleAuthProvider,
		sendEmailVerification,
		signInWithPopup
	} from 'firebase/auth';
	import { auth } from '../../lib/firebaseConfig';

	let errorCode:string;
	let errorMessage:string;

	$: email = '';
	$: password1 = '';
	$: password2 = '';
	$: emailFocus = false;
	$: passwordFocus = false;

	const onEmailFocus = () => (emailFocus = true);
	const onEmailBlur = () => (emailFocus = false);
	const onPassword1Focus = () => (passwordFocus = true);
	const onPassword1Blur = () => (passwordFocus = false);
	const onPassword2Focus = () => (passwordFocus = true);
	const onPassword2Blur = () => (passwordFocus = false);
	const submit = () => {
		if (password1 != password2) {
			errorCode = 'Match Password'
			errorMessage = 'Passwords do not match';
			return;
		}
		createUserWithEmailAndPassword(auth, email, password1)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				sendEmailVerification(user).then(() => {
					goto('/register/info');
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};

	const googleSubmit = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential?.accessToken;
				// The signed-in user info.
				const user = result.user;
				goto("/register/info")
			})
			.catch((error) => {
				// Handle Errors here.
				errorCode = error.code;
				errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				const credential = error.credential;

			});
	};

	$: if (errorCode == 'auth/user-not-found') {
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
			<img class="stealth" src={logo} alt="logo" />
			<h1>Stealth</h1>
			<a href="/hiroto">back</a>
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
					<label for="password" class:out={passwordFocus || password1 != ''}>Password</label>
					<input
						type="password"
						name="password"
						id="password"
						required
						minlength="8"
						maxlength="80"
						autocomplete="current-password"
						on:focus={onPassword1Focus}
						on:blur={onPassword1Blur}
						bind:value={password1}
					/>
				</div>
				<div class="form-group">
					<label for="password" class:out={passwordFocus || password2 != ''}
						>Re-enter password</label
					>
					<input
						type="password"
						name="password"
						id="password"
						required
						minlength="8"
						maxlength="80"
						autocomplete="current-password"
						on:focus={onPassword2Focus}
						on:blur={onPassword2Blur}
						bind:value={password2}
					/>
				</div>
				<div class="form-group">
					<div class="button-box">
						<button on:click|preventDefault={googleSubmit} class="google">
							<img src={google} alt="g-login" class="google" />
							<p class="tool-tip-text">Sign up with Google</p>
						</button>
						<button class="default-login-btn" on:click|preventDefault={submit}>SIGN UP</button>
					</div>
				</div>
			</form>
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
		height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	div.box {
		height: 380px;
		width: 360px;
		background-color: var(--color-theme-1);
		border: 2px solid black;
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

	.button-box {
		display: flex;
		flex-direction: row;
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

	button:hover,
	button.google:hover {
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

	a:hover {
		text-decoration: underline;
	}

	.box-title {
		position: relative;
	}

	img.stealth {
		position: absolute;
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 50%;
		left: 1rem;
	}

	img.google {
		height: 1.5rem;
		width: 1.5rem;
	}

	button.google {
		display: flex;
		position: relative;
		box-sizing: border-box;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 2.5rem;
		width: 3rem;
		border-radius: 0.5rem;
		margin-right: 1rem;
		background-color: white;
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

	.tool-tip-text {
		position: absolute;
		visibility: hidden;
		width: 120px;
		background-color: white;
		color: black;
		border: solid 2px black;
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;
		width: 120px;
		top: 100%;
		left: 50%;
		margin-left: -60px;
	}

	.google:hover > .tool-tip-text {
		visibility: visible;
	}

	.box-title > a {
		position: absolute;
		right: 0;
		top: 0.5rem;
	}
</style>
