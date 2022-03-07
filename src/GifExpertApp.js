// GifExpertApp

import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import SetElements from './components/SetElements';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories ] = useState([]); 
    const [elements, setElements ] = useState(10); 

    return (<> 
             <h2> GifExpertApp</h2> 
	     <AddCategory setCategories={setCategories}/>
	     <SetElements setElements={setElements}/>
	     <hr/> 

	     <ol>
		     {
			     categories.map((category,i) => 
			              <GifGrid key={i} category={category} elements={elements}/>
			     )}
	     </ol>
	    </>);
}

export default GifExpertApp;