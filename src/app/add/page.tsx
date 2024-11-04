'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/app/components/header';
import { addSingleBook } from '@/app/actions';
import { type Book } from '@/types';

export const AddBook = () => {
	const [book, setBook] = useState<Book>({
		id: Math.floor(1000 + Math.random() * 9000),
		title: '',
		author: '',
		price: 0,
		description: '',
	});
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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await addSingleBook(book);

			push('/');
			refresh();
		} catch (error) {
			setError('Failed to update book');
		}
	};

	return (
		<div>
			<Header />

			{error ? (
				<div className='my-5 w-full max-w-lg mx-auto bg-red-400 p-4 rounded-lg'>
					{error}
				</div>
			) : null}

			<form onSubmit={handleSubmit} className='my-5 w-full max-w-lg mx-auto'>
				<h2 className='text-2xl font-bold mb-6'>Add book</h2>

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
						step='0.01'
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
		</div>
	);
};
