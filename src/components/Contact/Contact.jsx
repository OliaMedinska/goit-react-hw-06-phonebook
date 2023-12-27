import React from 'react';
import './Contact.css';

export const Contact = ({ contacts, filter, onDeleteContact }) => {
  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContactHandler = deleteId => {
    onDeleteContact(deleteId);
  };

  const filtredContacts = getVisibleContacts();

  return (
    <>
      {filtredContacts.length !== 0 ? (
        <ul>
          {filtredContacts.map(contact => {
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
