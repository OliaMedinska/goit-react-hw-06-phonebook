
import './Contact.css';
import PropTypes from 'prop-types';
import React from "react";

const Contact = ({contactList, handleDeleteContact}) => {
    return (
        <ul>
            {contactList.map((contact) => {
                const {id, name, number} = contact;
                return (
                   <li key={id} className='contact-item'>
                    <p className='contact-text'>{name}: {number}</p>
                    <button className='contact-button' type='button' onClick={() => handleDeleteContact(id)}>Delete</button>
                   </li>
                )
            })}
        </ul>
    )
}

Contact.propTypes = {
    contactList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,).isRequired,
    handleDeleteContact: PropTypes.func.isRequired,
}

export default Contact;