import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category, elements ) => {

	const [state, setState] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {
		getGifs(category, elements).then( imgs => setState( {
			data: imgs,
			loading: false
		}))
        }, [category]);

	return state; // {data, loading}
}