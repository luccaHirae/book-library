import { Header } from '@/app/components/header';
import { BookCard } from '@/app/components/book-card';
import { listBooks } from '@/app/actions';
import { type Book } from '@/types';

export const dynamic = 'fornce-dynamic';

export default async function Home() {
	const response = await listBooks();
	const books: Book[] = response.data;

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
