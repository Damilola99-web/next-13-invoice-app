import React, { Dispatch, SetStateAction, useRef } from 'react';
import useOutsideAlerter from './OutsideAlerter';

export default function Filter({setFilterOpen}:{setFilterOpen : Dispatch<SetStateAction<boolean>>}) {
	const filterRef = useRef<HTMLDivElement>();
	useOutsideAlerter(filterRef, setFilterOpen);
    return (
        // @ts-ignore
		<div ref={filterRef} className='absolute bg-white dark:bg-dark-purple shadow-lg p-8 rounded-lg w-[220px] h-[150px] top-14 -left-[50%]'>
			hey
		</div>
	);
}
