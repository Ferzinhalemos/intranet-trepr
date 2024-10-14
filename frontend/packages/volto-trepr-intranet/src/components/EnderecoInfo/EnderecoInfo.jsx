import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@plone/components';

const EnderecoInfo = ({ content }) => {
  const { endereco, complemento, cidade, estado, cep } = content;
  return (
    <Container narrow className={'endereco-wrapper'}>
      {endereco && (
        <Container>
          <span className="endereco">{endereco}</span>
        </Container>
      )}
      {complemento && (
        <Container>
          <span className="complemento">{complemento}</span>
        </Container>
      )}
      <Container>
        <span className="cidade">{cidade}</span>
        {estado && (
          <>
            - <span className="estado">{estado.token}</span>
          </>
        )}
      </Container>
      {cep && (
        <Container>
          <span className="cep">{cep}</span>
        </Container>
      )}
    </Container>
  );
};
EnderecoInfo.propTypes = {
  content: PropTypes.shape({
    endereco: PropTypes.string,
    complemento: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.shape({
      token: PropTypes.string,
      title: PropTypes.string,
    }),
    cep: PropTypes.string,
  }).isRequired,
};
export default EnderecoInfo;
