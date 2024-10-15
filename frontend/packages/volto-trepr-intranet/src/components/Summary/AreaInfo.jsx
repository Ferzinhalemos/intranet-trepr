import React from 'react';
import { Card } from 'semantic-ui-react';
import areaSVG from '@plone/volto/icons/home.svg';
import { Icon, UniversalLink } from '@plone/volto/components';

const AreaInfo = ({ area }) => {
  return (
    area && (
      <Card key={area.UID} className={'area'}>
        <Icon name={areaSVG} size="64px" className={'icon listitem'} />
        <Card.Content>
          <Card.Header>
            <UniversalLink href={area['@id']} className={'nome'}>
              {area.title}
            </UniversalLink>
          </Card.Header>
          <Card.Meta>{area.description}</Card.Meta>
        </Card.Content>
      </Card>
    )
  );
};

export default AreaInfo;
