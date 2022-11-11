import { collection, getDocs, type DocumentData } from 'firebase/firestore';
import type { PageServerLoad } from './$types';
import { db } from '$lib/firebaseConfig';

export const load: PageServerLoad = async () => {
	let querySnapshot = await getDocs(collection(db, 'users'));

	let prop: Array<{ id: string; data: DocumentData }> = [];

	querySnapshot.forEach((doc) => {
		const data = doc.data();
		const id = doc.id;
		prop.push({ id, data });
	});
	return {
		prop: prop
	};
};
