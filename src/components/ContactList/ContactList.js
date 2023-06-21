import { deleteContact } from 'redux/thunks';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsApi';

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  // const filteredContacts = useSelector(selectFilteredContact);
  const { data } = useGetContactsQuery();
  const filteredContacts = data?.filter(contact =>
    contact.name.includes(filter)
  );
  const deleteContactHandler = event => {
    const { id } = event.currentTarget;
    dispatch(deleteContact(id));
  };

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
              onClick={deleteContactHandler}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
