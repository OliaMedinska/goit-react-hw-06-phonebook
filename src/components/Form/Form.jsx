import { useState } from 'react';
import './Form.css';
import { nanoid } from 'nanoid';

export const Form = ({ onSubmit }) => {
  const [state, setState] = useState({ name: '', number: '' });

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
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
