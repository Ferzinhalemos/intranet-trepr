import React from 'react';
import AreaInfo from '../../Summary/AreaInfo';

const ComissaoGridItem = ({ item }) => {
  return (
    <div className={`card-container area`}>
      <div className="item">
        <AreaInfo area={item} />
      </div>
    </div>
  );
};

export default ComissaoGridItem;
