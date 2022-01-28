import React from 'react'
import ContactItem from './ContactItem'
import { MdDeleteForever } from 'react-icons/md';

import PropTypes, { shape } from 'prop-types';
import { ContactListCss, DeleteContactBtn } from './ContactList.styled';


const ContactList = ({ filteredContacts, onDeleteContacts }) => {
    return (
        <ContactListCss>
          {
            filteredContacts.map(({ id, name, number}) => {
              return (
                <ContactItem key={id} name={name} number={number}>
                  <DeleteContactBtn type='button' onClick={() => onDeleteContacts(name)}>Delete <MdDeleteForever color='#f69d3c' size={22}/></DeleteContactBtn>
                
                </ContactItem>
                
              )
            })
          }
        </ContactListCss>
    )
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
}


export default ContactList;