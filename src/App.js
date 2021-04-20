import React, { Component } from 'react';
import shortid from 'shortid';
import Layout from './components/Layout';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    this.setState();
  };

  addEntry = data => {
    console.log(data);
    const { name, number } = data;
    const entry = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(prevState => ({
      ...prevState,
      contacts: [entry, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm value={this.state.name} onSubmit={this.addEntry} />
        </Section>

        <Section title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
      </Layout>
    );
  }
}

export default App;
