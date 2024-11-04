import 'server-only';
import { type Book } from '@/types';

export const getBooks = async () => {
	try {
		const response = await fetch(`${process.env.API_URL}/books`, {
			cache: 'no-store',
		}).then(async (res) => {
			const status = res.status;
			const data = await res.json();
			return { status, data };
		});

		return response;
	} catch (error) {
		console.error(error);

		throw new Error('Failed to fetch books');
	}
};

export const getBook = async (id: number) => {
	try {
		const response = await fetch(`${process.env.API_URL}/books/${id}`, {
			cache: 'no-store',
		}).then(async (res) => {
			const status = res.status;
			const data = await res.json();
			return { status, data };
		});

		return response;
	} catch (error) {
		console.error(error);

		throw new Error('Failed to fetch book');
	}
};

export const putBook = async (book: Book) => {
	try {
		const response = await fetch(`${process.env.API_URL}/books`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(book),
		});

		if (!response.ok) {
			throw new Error(`Failed to update book: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error(error);

		throw new Error('Failed to add book');
	}
};

export const updateBook = async (book: Book, id: number) => {
	try {
		const response = await fetch(`${process.env.API_URL}/books/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(book),
		});

		if (!response.ok) {
			throw new Error(`Failed to update book: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error(error);

		throw new Error('Failed to update book');
	}
};

export const deleteBook = async (id: number) => {
	try {
		const response = await fetch(`${process.env.API_URL}/books/${id}`, {
			method: 'DELETE',
		});

		if (!response.ok) {
			throw new Error(`Failed to delete book: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error(error);

		throw new Error('Failed to delete book');
	}
};
