'use client';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import { Josefin_Sans } from 'next/font/google';
import { Provider } from 'react-redux';
import '@/styles/globals.css';
import { useState } from 'react';
import Overlay from '@/components/Overlay';
import store from '@/data/store';
import ChildrenContainer from '@/components/ChildrenContainer';

const kumbh = Josefin_Sans({ subsets: ['latin'] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<html lang='en'>
			<head></head>
			<body
				style={kumbh.style}
				className={` overflow-x-hidden text-black dark:text-white bg-light-bg dark:bg-dark-bg w-screen min-h-screen`}
			>
				<Provider store={store}>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
					>
						{modalOpen && <Overlay setModalOpen={setModalOpen} />}
						<div
							className={
								modalOpen
									? 'filtered flex flex-col lg:flex-row w-full h-full '
									: 'flex flex-col lg:flex-row w-full h-full'
							}
						>
							<Navbar setModalOpen={setModalOpen} />
							<ChildrenContainer>{children}</ChildrenContainer>
						</div>
					</ThemeProvider>
				</Provider>
			</body>
		</html>
	);
}
