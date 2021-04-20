import ContactItem from '../ContactItem'
import './ContactList.scss'


const ContactList = ({ contacts }) => (
	<ul>
		{contacts.map(contact => {
			const {id, name, number} = contact
			return (
				<li key={id}>
					<ContactItem name={name} number={ number }/>
				</li>)
		})}
	</ul>
)
 
export default ContactList;