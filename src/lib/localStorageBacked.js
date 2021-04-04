import { writable } from 'svelte/store';

const identity = (i) => i;

/*
 Creates a writable store that is backed by local storage.
 Keep in mind that local storage is not available when server side rendering.
*/
export const localStorageBacked = ({
	key,
	defaultValue,
	serverSideRenderingValue = defaultValue,
	fetchTransformation = identity,
	storeTransformation = identity
}) => {
	let stored;
	if (typeof window !== 'undefined') {
		const storedString = window.localStorage.getItem(key);
		if (storedString) {
			stored = fetchTransformation(JSON.parse(storedString));
		} else {
			stored = defaultValue;
		}
	} else {
		stored = serverSideRenderingValue;
	}

	const written = writable(stored);

	written.subscribe((value) => {
		if (typeof window !== 'undefined') {
			const storing = storeTransformation(value);
			window.localStorage.setItem(key, JSON.stringify(storing));
		}
	});

	return written;
};
