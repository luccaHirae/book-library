import Link from 'next/link';
import { LinkButton } from '@/app/components/link-button';

export const Header = () => {
	return (
		<header className='flex justify-between items-center py-6 px-10 shadow-md'>
			<h1 className='text-3xl font-bold'>Book Library</h1>

			<nav>
				<ul className='flex space-x-6'>
					<li className='flex items-center'>
						<Link href='/' className='hover:text-text-hover'>
							Home
						</Link>
					</li>

					<li>
						<LinkButton href='/add'>Add Book</LinkButton>
					</li>
				</ul>
			</nav>
		</header>
	);
};
