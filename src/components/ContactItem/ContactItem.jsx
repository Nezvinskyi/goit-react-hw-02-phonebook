import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types'
import './ContactItem.scss'


const ContactItem = ({id, name, number, onDeleteContact}) => {
	return (
		<>
			<span>{name}: </span>
			<span>{number}</span>
			<IconButton
				aria-label="delete"
				onClick={()=> onDeleteContact(id)}
			>
				<DeleteIcon/>
			</IconButton>
		</>
	 );
}
 
export default ContactItem;

ContactItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
}