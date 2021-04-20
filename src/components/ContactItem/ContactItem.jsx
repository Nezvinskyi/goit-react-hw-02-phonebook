import './ContactItem.scss'

const ContactItem = ({name, number}) => {
	return (
		<>
			<span>{name}: </span>
			<span>{number}</span>
		</>
	 );
}
 
export default ContactItem;