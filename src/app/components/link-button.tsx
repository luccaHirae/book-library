import Link from 'next/link';

interface Props {
	children: React.ReactNode;
	href: string;
}

export const LinkButton = ({ children, href }: Props) => {
	return (
		<button className='py-2 px-4 bg-btn-color text-white rounded hover:bg-text-hover transition duration-200'>
			<Link href={href}>{children}</Link>
		</button>
	);
};
