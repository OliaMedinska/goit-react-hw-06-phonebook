import './App.css';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Contact } from './Contact/Contact';
import { Filter } from './Filter/Filter';
import {
  addContact,
  deleteContact,
  updateState,
} from './../redux/contactsSlice';
import { setFilter } from './../redux/filtersSlice';
import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts =
      JSON.parse(window.localStorage.getItem('contacts')) || [];
    if (savedContacts.length > 0) {
      dispatch(updateState(savedContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    dispatch(
      addContact({
        name,
        number,
        id: nanoid(),
      })
    );
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const checkContactName = q => {
    return contacts.some(({ name }) => name.toLowerCase() === q.toLowerCase());
  };

  const deleteContactHandler = deleteId => {
    dispatch(deleteContact(deleteId));
  };

  return (
    <div className="content">
      <h1 className="heading">Phonebook</h1>
      <Form onSubmit={formSubmitHandler}></Form>
      <h2 className="heading">Contacts</h2>
      <Filter value={filter} onChange={changeFilter}></Filter>
      {getVisibleContacts().length !== 0 ? (
        <Contact
          contactList={getVisibleContacts()}
          handleDeleteContact={deleteContactHandler}
        ></Contact>
      ) : (
        <p className="heading">No contacts</p>
      )}
    </div>
  );
};
