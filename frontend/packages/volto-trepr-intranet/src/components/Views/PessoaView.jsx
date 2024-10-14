import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@plone/components';
import { Image } from '@plone/volto/components';
import ContactInfo from '../ContactInfo/ContactInfo';
import EnderecoInfo from '../EnderecoInfo/EnderecoInfo';

const PessoaView = (props) => {
  const { content } = props;
  return (
    <Container narrow id="page-document" className="view-wrapper pessoa-view">
      {content.image && (
        <Container className={'image'}>
          <Image
            className="documentImage ui right floated image"
            alt={content.title}
            title={content.title}
            item={content}
            imageField="image"
            responsive={true}
          />
        </Container>
      )}
      {content.cargo && (
        <span className={`cargo cargo-${content.cargo.token}`}>
          {content.cargo.title}
        </span>
      )}
      <h1 className="documentFirstHeading">{content.title}</h1>
      {content.description && (
        <p className="documentDescription">{content.description}</p>
      )}
      <EnderecoInfo content={content} />
      <ContactInfo content={content} />
    </Container>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
PessoaView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
      scales: PropTypes.shape({
        preview: PropTypes.shape({
          download: PropTypes.string,
        }),
      }),
    }),
    email: PropTypes.string,
    telefone: PropTypes.string,
    endereco: PropTypes.string,
    complemento: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    cep: PropTypes.string,
  }).isRequired,
};
export default PessoaView;
