import { useState } from 'react';
import './Form.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './../../redux/contactsSlice';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.item);

  const [state, setState] = useState({ name: '', number: '' });

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    if (checkContactName(state.name)) {
      alert(`${state.name} is already in contacts.`);
      return;
    }
    dispatch(
      addContact({
        name: state.name,
        number: state.number,
        id: nanoid(),
      })
    );
    reset();
  };

  const reset = () => {
    setState({
      name: '',
      number: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const checkContactName = q => {
    return contacts.some(({ name }) => name.toLowerCase() === q.toLowerCase());
  };

  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor={nameId} className="form-label">
        Name
        <input
          id={nameId}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="form-input"
          value={state.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor={numberId} className="form-label">
        Number
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="form-input"
          value={state.number}
          onChange={handleChange}
        />
      </label>

      <div className="form-decor">
        <button className="form-button" type="submit">
          Add contacts
        </button>
      </div>
    </form>
  );
};
