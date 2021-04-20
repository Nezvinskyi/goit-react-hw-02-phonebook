import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
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