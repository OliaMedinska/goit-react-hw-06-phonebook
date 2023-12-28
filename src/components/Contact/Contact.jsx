import React from 'react';
import './Contact.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './../../redux/contactsSlice';

export const Contact = () => {
  const contacts = useSelector(state => state.contacts.item);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = getVisibleContacts();

  return (
    <>
      {filteredContacts.length !== 0 ? (
        <ul>
          {filteredContacts.map(contact => {
            const { id, name, number } = contact;
            return (
              <li key={id} className="contact-item">
                <p className="contact-text">
                  {name}: {number}
                </p>
                <button
                  className="contact-button"
                  type="button"
                  onClick={() => deleteContactHandler(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="heading">No contacts</p>
      )}
    </>
  );
};
