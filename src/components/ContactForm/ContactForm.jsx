import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { MdPersonAddAlt1 } from  'react-icons/md'

import { Form, Label, Input, SubmitBtn } from './ContactForm.styled';

class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }
    state = {
        name: '',
        number: '',
    }

    handdleChange = (event) => {
        const name = event.currentTarget.name;
        const inputValue = event.currentTarget.value;

        this.setState({ [name]: inputValue });
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state);
        this.resetState();
        event.currentTarget.reset()
    }

    resetState = () => {
       return this.setState({name: '', number: ''});
    }

    render() { 
        return (
    <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
        type="text"
        name="name"
        id='name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={this.handdleChange}

      />
        <Label htmlFor="number">Number</Label>
        <Input
          type="tel"
          name="number"
          id='number'
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handdleChange}
        />
          <SubmitBtn type='submit'>Add contact<MdPersonAddAlt1 color='#f69d3c' size={22}/></SubmitBtn>
    </Form>
        );
    }
}

export default ContactForm;

 