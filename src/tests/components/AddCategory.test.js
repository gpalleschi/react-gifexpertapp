import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas <AddCategory />', () => { 

	const setCategories = jest.fn();

	let wrapper = shallow( <AddCategory setCategories={setCategories}/> );

	beforeEach( () => {
		jest.clearAllMocks();
	        wrapper = shallow( <AddCategory setCategories={setCategories}/> );
	})

	test('Debe de mostrarse correctamente', () => {
		expect( wrapper ).toMatchSnapshot();
	})

	test('Debe de cambiar la caja de testo ', () => { 

		const input = wrapper.find('input');
		const value = 'Hola Mundo';
		input.simulate('change', { target : { value : value}});

	})

	test('No debe de postear la informacion on submit', () => {
		wrapper.find('form').simulate('submit',{ preventDefault: () => {}});

		expect( setCategories ).not.toHaveBeenCalled();
	 })


	 test('debe de llamar el setCategory y limpiar la caja de texto', () => {


		// 1) Simular el input change
		const input = wrapper.find('input');
		const value = 'Hola Mundo';
		input.simulate('change', { target : { value : value}});
		// 2) Simular el submit
		wrapper.find('form').simulate('submit',{ preventDefault (){}});
		// 3) setCategories se debe che haber llamado
		expect( setCategories ).toHaveBeenCalled();
		// Specifichiamo che viene chiamato una volta
		expect( setCategories ).toHaveBeenCalledTimes(1);
		// Chiamata con una funzione
		expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));

		// 4) el valor de input deve essere vuoto
		expect(wrapper.find('input').prop('value')).toBe('');

	  })
})