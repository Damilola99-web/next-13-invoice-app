import { GitFork, Github, Webhook } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react';

export default function Overlay({
	setModalOpen,
}: {
	setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<div
			onClick={() => setModalOpen(false)}
			className=' z-40 flex items-center justify-center text-center fixed w-screen h-screen overflow-hidden bg-black/40'
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className=' flex items-center justify-center space-y-4 flex-col '
			>
				<img
					src='/rasheed.jpg'
					alt='rasheed'
					className='max-w-[100px] rounded-full'
				/>
				<p className='text-4xl text'>Abdul-Rasheed</p>
				<span className=' gradient w-2 h-2 flex rounded-full '></span>
				<div className='flex flex-col space-x-3 items-center justify-center text-center'>
					<a
						className=' flex space-x-2'
						target={'_blank'}
						href='https://github.com/damilola99-web'
					>
						<p className='hovered text-xl text'>Visit Project Git Repo</p>
						<GitFork className='text-green-100' />
					</a>
					<a
						className='flex space-x-3'
						target={'_blank'}
						href='https://wahab-rasheed.vercel.app'
					>
						<p className='hovered text-xl text'>Visit My Portfolio</p>
						<Webhook className='text-green-100' />
					</a>
					<a
						className='flex space-x-3'
						href='https://github.com/damilola99-web'
					>
						<p className='hovered text-xl text'>Visit My Github Repo</p>
						<Github className='text-green-100' />
					</a>
				</div>
			</div>
		</div>
	);
}
