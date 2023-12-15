import './Contact.css';

export const Contact = ({ contactList, handleDeleteContact }) => {
  return (
    <ul>
      {contactList.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id} className="contact-item">
            <p className="contact-text">
              {name}: {number}
            </p>
            <button
              className="contact-button"
              type="button"
              onClick={() => handleDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
