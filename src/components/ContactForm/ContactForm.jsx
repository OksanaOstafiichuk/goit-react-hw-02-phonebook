import { Component } from 'react';
import { FilterInput } from 'components/Filter/Filter.styled';
import { Button } from 'components/ContactList/ContactList.styled';
import { Form, FormInput } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hendelSaveContact = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  hendelSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    return (
      <Form onSubmit={this.hendelSubmit}>
        <FormInput>
          <span>Name</span>
          <FilterInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.hendelSaveContact}
          />
        </FormInput>
        <FormInput>
          <span>Number</span>
          <FilterInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.hendelSaveContact}
          />
        </FormInput>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
