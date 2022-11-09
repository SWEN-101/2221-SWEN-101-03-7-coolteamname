// @author Hiroto

import { auth } from '../firebaseConfig';

export async function load() {
	if (auth.currentUser){
		return {
			props: {
				user: auth.currentUser
			}
		}
	}
	return {
		status: 302,
		redirect: "/login"
	};
}