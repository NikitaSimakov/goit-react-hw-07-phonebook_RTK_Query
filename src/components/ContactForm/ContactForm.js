import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/thunks';
import css from './ContactForm.module.css';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';

const ContactForm = () => {
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { refetch } = useGetContactsQuery();
  const [addContactQuery] = useAddContactMutation();
  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // addContactQuery({ name, number });
    // dispatch(addContact({ name, number }));
    addContactQuery({ name, number });
    resetForm();
    refetch();
  };
  // const onClick = ({ name, number }) => {
  //   addContactQuery({ name, number });
  // };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form_label}>
        Name
        <input
          placeholder="Homer Simpson"
          className={css.form_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={css.form_label}>
        Number
        <input
          placeholder="XXX-XX-XX"
          className={css.form_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button className={css.form_button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
