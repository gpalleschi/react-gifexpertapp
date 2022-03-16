import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />>', () => {
        const url = 'https://media1.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=11889665o4rvrqhjl7ij3lcdwo6p7mpw3d3brn24hgdxmkv4&rid=giphy.gif&ct=g';
        const title = `saitama GIF`;
        const wrapper = shallow( <GifGridItem id={ 1 } url={ url } title={ title } /> );

	test('debe de mostrar <GifGridItem /> correctamente', () => {
            expect( wrapper ).toMatchSnapshot();
        });

	test('debe de tener un parrafo con el title', () => {
            const p = wrapper.find('p');
	    expect(p.text().trim()).toBe( title);		
	});

	test('debe de tener la imagen igual a la url y alt de los props ', () => {
		const img = wrapper.find('img');

		expect(img.prop('src')).toBe(url);
		expect(img.prop('alt')).toBe(title);

	});

	test('debe de tener la classe animate__fadein ', () => {

		const div = wrapper.find('div');

		expect(div.prop('className').includes('animate__fadein')).toBe(true);

	});	
});

