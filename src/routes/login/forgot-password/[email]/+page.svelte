<script>
	import { sendPasswordResetEmail } from 'firebase/auth';
	import { auth } from 'src/routes/firebaseConfig';

	PageData

	sendPasswordResetEmail(auth, email)
		.then(() => {
			// Password reset email sent!
			// ..
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
</script>

<div class="center">
	<p>Thats really unfortunate</p>
</div>

<style>
	.center {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
