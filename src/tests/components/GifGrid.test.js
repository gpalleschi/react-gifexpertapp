import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prueba <GifGrid />', () => { 

	const category = 'One Punch';
	const elements = 1;

	test('Snapshot', () => { 


	    useFetchGifs.mockReturnValue({
		data: [],
		loading: true
	    });

	    const wrapper = shallow( <GifGrid category={category} elements={elements}/>);
	    expect(wrapper).toMatchSnapshot();
	})


	test('debe de mostrar items cuando se cargan imagenes useFetchGifs()', () => {

	    const gifs = [{
		    id: 'ABC',
		    url: 'https:\\qualsiasicosa1.com',
		    title: 'qualsiasi cosa 1'
	    },
	    {
		    id: '123',
		    url: 'https:\\qualsiasicosa2.com',
		    title: 'qualsiasi cosa 2'
	    }
	]

	    useFetchGifs.mockReturnValue({
		data: gifs,
		loading: false
	    });
	    
	    const wrapper = shallow( <GifGrid category={category} elements={elements}/>);

	    expect( wrapper).toMatchSnapshot();
	    // Quando è caricata la lista di gifs il parragrafo loading non deve essere presente
	    expect( wrapper.find('p').exists()).toBe(false);
	    // Se voglio validare se è presente un componente semplicemente lo scrivo
	    expect( wrapper.find('GifGridItem').length).toBe(gifs.length);


	 })
})