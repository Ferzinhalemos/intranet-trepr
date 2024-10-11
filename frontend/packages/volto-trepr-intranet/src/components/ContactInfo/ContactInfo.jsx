import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@plone/components';

const ContactInfo = ({ content }) => {
  const { telefone, email } = content;

  return (
    <Container narrow className="contato">
      <Container className="telefone">
        <span>Telefone</span>: <span>{telefone}</span>
      </Container>
      <Container className="email">
        <span>E-mail</span>: <a href={`mailto:${email}`}>{email}</a>
      </Container>
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ContactInfo.propTypes = {
  content: PropTypes.shape({
    email: PropTypes.string,
    telefone: PropTypes.string,
  }).isRequired,
};

export default ContactInfo;
