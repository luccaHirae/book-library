import { Book } from '@/types';
import { LinkButton } from '@/app/components/link-button';

interface Props {
	book: Book;
}

export const BookCard = ({ book }: Props) => {
	return (
		<div className='p-6 bg-slate-100 rounded-lg shadow-lg'>
			<h3 className='text-xl font-semibold'>{book.title}</h3>

			<p className='text-lg text-gray-600'>by {book.author}</p>

			<div className='mt-2 mb-4 text-xl font-bold'>{book.price}</div>

			<LinkButton href={`/${book.id}`}>View Details</LinkButton>
		</div>
	);
};
