import { Header } from '@/app/components/header';
import { BookCard } from '@/app/components/book-card';
import { type Book } from '@/types';

const books: Book[] = [
	{
		id: 1,
		title: 'The Great Adventure',
		description: 'A book about the great adventure of life',
		author: 'John Doe',
		price: 19.99,
	},
	{
		id: 2,
		title: 'Learn Vector Calculus',
		description: 'A book about vector calculus',
		author: 'Jane Doe',
		price: 29.99,
	},
];

export default function Home() {
	return (
		<div>
			<Header />

			<main className='py-12 px-8'>
				<h2 className='text-4xl font-semibold mb-8'>Explore our collections</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{books.map((book) => (
						<BookCard key={book.id} book={book} />
					))}
				</div>
			</main>
		</div>
	);
}
