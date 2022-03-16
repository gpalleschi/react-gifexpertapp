import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifExpertApp from '../GifExpertApp';


describe('Prueba <GifExpertApp />', () => {


	test('Test Snapshot', () => {

		const wrapper = shallow( <GifExpertApp />);
		expect( wrapper ).toMatchSnapshot();
	})

	test('Deve mostrare una lista di categorie', () => { 

		const categories = ['One Punch','Dragon Ball'];

		const wrapper = shallow( <GifExpertApp defaultCategory={categories} />);

		// Creo lo snapshot
		expect( wrapper ).toMatchSnapshot();
		// Testo se il numero di categorie è quello atteso
		expect( wrapper.find('GifGrid').length ).toBe(categories.length);

	})

});
