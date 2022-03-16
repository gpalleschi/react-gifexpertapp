import '@testing-library/jest-dom'
import getGifs from '../../helpers/getGifs';

describe('Pruebas en function fetch getGifs', () => {

// Prueba con default elements

	test('debe de traer 10 elements', async() => {

	     const gifs = await getGifs('One Punch');

	     expect(gifs.length ).toBe(10);
	});

// Prueba con valor fijo de elements

	test('debe de traer 20 elements', async() => {
	     const gifs = await getGifs('One Punch', 20);

	     expect(gifs.length ).toBe(20);

	});

// Prueba con category null
	test('debe de traer 0 elements', async() => {
	     const gifs = await getGifs('', 20);
	     expect(gifs.length ).toBe(0);

	});

});