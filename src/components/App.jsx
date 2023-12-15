import './App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Contact } from './Contact/Contact';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts =
      JSON.parse(window.localStorage.getItem('contacts')) || [];
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    if (checkContactName(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const id = nanoid();
    setContacts(contacts => [
      ...contacts,
      {
        name,
        number,
        id,
      },
    ]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const checkContactName = q => {
    return contacts.some(({ name }) => name.toLowerCase() === q.toLowerCase());
  };

  const deleteContact = deleteId => {
    setContacts(prevState => prevState.filter(item => item.id !== deleteId));
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
          handleDeleteContact={deleteContact}
        ></Contact>
      ) : (
        <p className="heading">No contacts</p>
      )}
    </div>
  );
};
