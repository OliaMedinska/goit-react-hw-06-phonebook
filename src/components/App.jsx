import './App.css';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Contact } from './Contact/Contact';
import { Filter } from './Filter/Filter';
import { addContact, deleteContact } from './../redux/contactsSlice';
import { setFilter } from './../redux/filtersSlice';
import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.item);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const formSubmitHandler = ({ name, number }) => {
    if (checkContactName(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

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

  const deleteContactHandler = deleteId => {
    dispatch(deleteContact(deleteId));
  };

  const checkContactName = q => {
    return contacts.some(({ name }) => name.toLowerCase() === q.toLowerCase());
  };

  const filtredContacts = getVisibleContacts();

  return (
    <div className="content">
      <h1 className="heading">Phonebook</h1>
      <Form onSubmit={formSubmitHandler}></Form>
      <h2 className="heading">Contacts</h2>
      <Filter value={filter} onChange={changeFilter}></Filter>
      {filtredContacts.length !== 0 ? (
        <Contact
          contactList={filtredContacts}
          handleDeleteContact={deleteContactHandler}
        ></Contact>
      ) : (
        <p className="heading">No contacts</p>
      )}
    </div>
  );
};
