export const getGifs = async( category, elements ) => {

	const url = `https://api.giphy.com/v1/gifs/search?api_key=DsI93Rf8tEBFrO4uxmVfi1iyiw98q8UO&q=${ encodeURI(category) }&limit=${elements}`;

	const resp = await fetch( url );
	const {data} = await resp.json();

	const gifs = data.map( img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url
		}
	})

	return gifs;
  }