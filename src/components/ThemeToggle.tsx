'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};
	return (
		<div
			onClick={handleClick}
			className='cursor-pointer flex items-center justify-center'
		>
			<Sun className='text-[#7b8abf] rotate-90 scale-0 transition-all duration-200 dark:-rotate-0 dark:scale-100' />
			<Moon className='text-[#7b8abf] absolute rotate-0 scale-100 transition-all duration-200 dark:rotate-90 dark:scale-0 ' />
		</div>
	);
}
