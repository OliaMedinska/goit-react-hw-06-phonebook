import './App.css';
import { Form } from './Form/Form';
import { Contact } from './Contact/Contact';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div className="content">
      <h1 className="heading">Phonebook</h1>
      <Form />
      <h2 className="heading">Contacts</h2>
      <Filter />
      <Contact />
    </div>
  );
};
