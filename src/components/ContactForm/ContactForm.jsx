import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdPersonAddAlt1 } from 'react-icons/md';

import { Form, Label, Input, SubmitBtn } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handdleChange = event => {
    const name = event.currentTarget.name;
    const inputValue = event.target.value;

    switch (name) {
      case 'name':
        setName(inputValue);
        break;
      case 'number':
        setNumber(inputValue);
        break;

      default:
        return;
    }
  };
  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });
    resetState();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handdleChange}
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handdleChange}
      />
      <SubmitBtn type="submit">
        Add contact
        <MdPersonAddAlt1 color="#f69d3c" size={22} />
      </SubmitBtn>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
