import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@plone/components';
import { ConditionalLink, UniversalLink, Icon } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { isInternalURL } from '@plone/volto/helpers/Url/Url';
import { getContentIcon } from '@plone/volto/helpers/Content/Content';

const IconListingTemplate = ({
  headlineTag,
  items,
  linkTitle,
  linkHref,
  isEditMode,
}) => {
  let link = null;
  let href = linkHref?.[0]?.['@id'] || '';

  if (isInternalURL(href)) {
    link = (
      <ConditionalLink to={flattenToAppURL(href)} condition={!isEditMode}>
        {linkTitle || href}
      </ConditionalLink>
    );
  } else if (href) {
    link = <UniversalLink href={href}>{linkTitle || href}</UniversalLink>;
  }

  const getTitleTag = (tag) => {
    const level = tag.slice(-1);
    if (/\d/.test(level)) {
      return `h${Number(level) + 1}`;
    } else {
      return 'h3';
    }
  };
  const TitleTag = headlineTag ? getTitleTag(headlineTag) : 'h3';

  return (
    <>
      <Container className="items">
        {items.map((item) => {
          const iconName = getContentIcon(item.portal_type, true);
          return (
            <div className="listing-item" key={item['@id']}>
              <ConditionalLink item={item} condition={!isEditMode}>
                <Icon name={iconName} size="64px" />
                <div className="listing-body">
                  <TitleTag>{item.title ? item.title : item.id}</TitleTag>
                  <p>{item.description}</p>
                </div>
              </ConditionalLink>
            </div>
          );
        })}
      </Container>

      {link && <div className="footer">{link}</div>}
    </>
  );
};
IconListingTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
};
export default IconListingTemplate;
