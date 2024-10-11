import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@plone/components';

const EnderecoInfo = ({ content }) => {
  const { endereco, complemento, cidade, estado, cep } = content;

  return (
    <Container narrow className="endereco">
      <Container className="endereco">
        <span>Endereço</span>: <span>{endereco}</span>
      </Container>
      <Container className="complemento">
        <span>Complemento</span>: <span>{complemento}</span>
      </Container>
      <Container className="cidade">
        <span>Cidade</span>: <span>{cidade}</span>
      </Container>
      <Container className="estado">
        <span>Estado</span>: <span>{estado.token}</span>
      </Container>
      <Container className="cep">
        <span>CEP</span>: <span>{cep}</span>
      </Container>
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
EnderecoInfo.propTypes = {
  content: PropTypes.shape({
    endereco: PropTypes.string,
    complemento: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    cep: PropTypes.string,
  }).isRequired,
};

export default EnderecoInfo;
