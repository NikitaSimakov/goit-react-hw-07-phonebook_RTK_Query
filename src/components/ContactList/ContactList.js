// import { deleteContact } from 'redux/thunks';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contactsApi';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const { data } = useGetContactsQuery();
  const filteredContacts = data
    ?.filter(contact => contact.name.toLowerCase().includes(filter))
    .sort((a, b) => a.name.localeCompare(b.name));

  const [deleteContactQuery] = useDeleteContactMutation();

  return (
    <ul>
      {filteredContacts &&
        filteredContacts.map(contact => (
          <li className={css.contactList_item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.contactList_button}
              type="button"
              id={contact.id}
              onClick={() => deleteContactQuery(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
