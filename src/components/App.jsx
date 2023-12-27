import './App.css';
import { Form } from './Form/Form';
import { Contact } from './Contact/Contact';
import { Filter } from './Filter/Filter';
import { deleteContact } from './../redux/contactsSlice';
import { setFilter } from './../redux/filtersSlice';
import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.item);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h1 className="heading">Phonebook</h1>
      <Form></Form>
      <h2 className="heading">Contacts</h2>
      <Filter
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      ></Filter>
      <Contact
        contacts={contacts}
        filter={filter}
        onDeleteContact={id => dispatch(deleteContact(id))}
      ></Contact>
    </div>
  );
};
