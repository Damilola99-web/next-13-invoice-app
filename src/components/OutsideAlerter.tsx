import { useEffect, Ref, Dispatch, SetStateAction } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOutsideAlerter(
	ref: any,
	textRef: any,
	action: Dispatch<SetStateAction<boolean>>
) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event: Event) {
			if (
				ref?.current &&
				!ref?.current.contains(event.target) &&
				!textRef?.current.contains(event.target)
			) {
				action(false);
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}
