'use client';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import { Josefin_Sans, Chivo } from 'next/font/google';
import '@/styles/globals.css';
import { useState } from 'react';
import Overlay from '@/components/Overlay';

const kumbh = Josefin_Sans({ subsets: ['latin'] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<html lang='en'>
			<head></head>
			<body
				style={kumbh.style}
				className={` text-black dark:text-white bg-light-bg dark:bg-dark-bg w-screen min-h-screen`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
				>
					{modalOpen && <Overlay setModalOpen={setModalOpen} />}
					<div className={modalOpen ? 'filtered flex flex-col lg:flex-row w-full h-full ' : 'flex flex-col lg:flex-row w-full h-full'}>
						<Navbar setModalOpen={setModalOpen} />
						<div className='flex w-full justify-center'>{children}</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
