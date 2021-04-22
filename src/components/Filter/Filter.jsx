import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';

import './Filter.scss'

const Filter = ({ filter, onChange }) => (
	<FormControl variant="outlined">
		<InputLabel color='secondary' htmlFor="component-outlined-filter">Find contacts by name</InputLabel>
		<OutlinedInput
			type="text"
			id="component-outlined-filter"
			color='secondary'
			value={filter}
			onChange={onChange}
			label="Find contacts by name" />
	</FormControl>
)
 
export default Filter;