import React from 'react'
import PropTypes from 'prop-types';
import { ContactItemCss, ItemDescr } from './ContactItem.styled';

const ContactItem = ({ name, number, children}) => {
    
     
            return (
            
            <ContactItemCss>
              <ItemDescr>{name}:</ItemDescr>
              <span>{number}</span>
              {children}
            </ContactItemCss>
          )}
    
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default ContactItem;