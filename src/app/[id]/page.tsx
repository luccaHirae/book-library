'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/app/components/header';
import { type Book } from '@/types';

interface Props {
	params: {
		id: string;
	};
}

export const BookDetails = ({ params }: Props) => {
	const [book, setBook] = useState<Book | null>(null);
	const [error, setError] = useState<string | null>(null);
	const { push, refresh } = useRouter();

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		if (book) {
			const newBook: Book = {
				...book,
				[name]: name === 'price' ? parseFloat(value) : value,
			};

			setBook(newBook);
		}
	};

	const handleUpdateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			// TODO: Update book

			push('/');
			refresh();
		} catch (error) {
			setError('Failed to update book');
		}
	};

	const handleDeleteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			// TODO: Delete book

			push('/');
			refresh();
		} catch (error) {
			setError('Failed to delete book');
		}
	};

	useEffect(() => {
		(async () => {
			const book = {
				id: 2,
				title: 'Learn Vector Calculus',
				description: 'A book about vector calculus',
				author: 'Jane Doe',
				price: 29.99,
			};

			setBook(book);
		})();
	}, [params.id]);

	return (
		<div>
			<Header />

			{error ? (
				<div className='my-5 w-full max-w-lg mx-auto bg-red-400 p-4 rounded-lg'>
					{error}
				</div>
			) : null}

			{book ? (
				<div>
					<form
						onSubmit={handleUpdateSubmit}
						className='my-5 w-full max-w-lg mx-auto'
					>
						<h2 className='text-2xl font-bold mb-6'>Edit book</h2>

						<div className='mb-4'>
							<label htmlFor='title' className='block font-semibold'>
								Title
							</label>
							<input
								type='text'
								id='title'
								name='title'
								placeholder='Enter book title'
								value={book.title}
								onChange={handleChange}
								required
								className='w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-text-color'
							/>
						</div>

						<div className='mb-4'>
							<label htmlFor='author' className='block font-semibold'>
								Author
							</label>
							<input
								type='text'
								id='author'
								name='author'
								placeholder='Enter book author'
								value={book.author}
								onChange={handleChange}
								required
								className='w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-text-color'
							/>
						</div>

						<div className='mb-4'>
							<label htmlFor='price' className='block font-semibold'>
								Price
							</label>
							<input
								type='text'
								id='price'
								name='price'
								placeholder='Enter book price'
								value={book.price}
								onChange={handleChange}
								required
								className='w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-text-color'
							/>
						</div>

						<div className='mb-4'>
							<label htmlFor='description' className='block font-semibold'>
								Dkescription
							</label>
							<textarea
								id='description'
								name='description'
								placeholder='Enter book description'
								value={book.description}
								onChange={handleChange}
								required
								rows={4}
								className='w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-text-color'
							/>
						</div>

						<button
							type='submit'
							className='w-full py-3 bg-btn-color text-white rounded hover:bg-text-hover transition duration-200'
						>
							Save
						</button>
					</form>

					<form
						onSubmit={handleDeleteSubmit}
						className='my-5 w-full max-w-lg mx-auto'
					>
						<button
							type='submit'
							className='w-full py-3 bg-red-700 text-white rounded hover:bg-red-600 transition duration-200'
						>
							Delete
						</button>
					</form>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};
