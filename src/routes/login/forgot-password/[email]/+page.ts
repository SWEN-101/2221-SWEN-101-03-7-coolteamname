import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from 'src/routes/firebaseConfig';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const { email } = params;
  sendPasswordResetEmail(auth, email)
		.then(() => {
      return {
        post: {
          status: 200,
          email: email
        }
      };
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			
      return {
        post: {
          status:400,
          email: email,
          errorCode: errorCode,
          errorMessage: errorMessage
        }
      };
		});
};
