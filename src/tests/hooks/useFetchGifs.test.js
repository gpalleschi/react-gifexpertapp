import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'



describe('Pruebas en el custom hooks useFetchGifs ', () => {

	test('deve ritornare lo stato iniziale', async() => { 

// Uso la destrutturazione del risultato del renderHook
		const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch 1'));
		await waitForNextUpdate();

// Prendo da result.current i due parametri di ritorno 
		const { data, loading } = result.current;
// Ora posso testarli

		expect( data.length ).toEqual(10);
		expect( loading ).toEqual(false);
	})

	test('debe tornare un array di immagini e il loading in false', async() => {

		const {result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch 2'));
		await waitForNextUpdate();

		const { data, loading } = result.current;

		expect( data.length ).toEqual(10);
		expect( loading ).toEqual(false);		
	 })

});