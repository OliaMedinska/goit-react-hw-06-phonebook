import "./App.css";
import { nanoid } from "nanoid";
import Form from './Form/Form';
import Contact from "./Contact/Contact";
import Filter from "./Filter/Filter";
import { Component } from "react";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
    }

componentDidUpdate(prevProps, prevState) {
  if (prevState.contacts !== this.state.contacts) {
    window.localStorage.setItem(
      'contacts',
      JSON.stringify({ contacts: this.state.contacts })
    );
  }
}

componentDidMount() {
  const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));
  if (savedContacts) {
    this.setState({ contacts: savedContacts.contacts });
  }
}

formSubmitHandler = ({name, number}) => {

if (this.checkContactName(name)) {
      alert(`${name} is already in contacts.`)
      return
}

const id = nanoid();
    this.setState(({contacts}) => ({contacts: [...contacts, {
      name,
      number,
      id,
    }]}))
}

changeFilter = (evt) => {
    this.setState({filter: evt.currentTarget.value})
}

getVisibleContacts = () => {
    const {filter, contacts} = this.state;
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));
    }

    checkContactName = (q) => {
    const {contacts} = this.state;
    return contacts.some(({name}) => name.toLowerCase() === q.toLowerCase())
}

deleteContact = (deleteId) => {
    this.setState((prevState) => ({contacts: prevState.contacts.filter((item) => item.id !== deleteId)}))
}

render() {

return (
      <div className="content">
        <h1 className="heading">Phonebook</h1>
        <Form
            onSubmit={this.formSubmitHandler}>
        </Form>
        <h2 className="heading">Contacts</h2>
        <Filter
            value={this.state.filter}
            onChange={this.changeFilter}>
        </Filter>
{this.getVisibleContacts().length !== 0 
  ? 
        <Contact 
            contactList={this.getVisibleContacts()}
            handleDeleteContact={this.deleteContact}> 
        </Contact> 
  :
     <p className="heading">No contacts</p>}
      </div>
    )
  }
}

export default App;
