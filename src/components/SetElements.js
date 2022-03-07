import React from 'react';

import PropTypes from 'prop-types';

const SetElements = ({setElements}) => {

	const handleChange = (e) => {
		setElements(e.target.value)
	}

	return (<div className='elementSelection'>
	        <label for="elements">Gif Elements</label>
		<select ClassName='eComboBox' onChange={handleChange} name="elements" id="elements">
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10" selected="selected">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                </select>
	        </div>
		);
}

SetElements.prototype = {
	setElements: PropTypes.func.isRequired
}

export default SetElements;