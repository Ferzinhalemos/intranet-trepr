import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import Logo from '@plone/volto/components/theme/Logo/Logo';
import { Container } from '@plone/components';

const Footer = () => {
  const navRoot = useSelector((state) => state.navroot?.data?.navroot);
  const title = navRoot?.title ? navRoot.title : 'Intranet do TRE-PR';
  return (
    <footer id="footer">
      <Container layout className="footer">
        <Container className="footer-message">
          <span>{title} </span>
        </Container>
        <div className="logo">
          <Logo />
        </div>
        <a className="item powered-by" href="https://plone.org">
          <FormattedMessage
            id="Powered by Plone & Python"
            defaultMessage="Powered by Plone & Python"
          />
        </a>
      </Container>
    </footer>
  );
};

export default injectIntl(Footer);
