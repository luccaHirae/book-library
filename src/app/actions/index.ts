'use server';

import {
	deleteBook,
	getBook,
	getBooks,
	putBook,
	updateBook,
} from '@/app/actions/handlers';
import { type Book } from '@/types';

export const listBooks = async () => {
	const response = await getBooks();
	return response;
};

export const getSingleBook = async (id: number) => {
	const response = await getBook(id);
	return response;
};

export const addSingleBook = async (book: Book) => {
	const response = await putBook(book);
	return response;
};

export const editSingleBook = async (book: Book, id: number) => {
	const response = await updateBook(book, id);
	return response;
};

export const deleteSingleBook = async (id: number) => {
	const response = await deleteBook(id);
	return response;
};
