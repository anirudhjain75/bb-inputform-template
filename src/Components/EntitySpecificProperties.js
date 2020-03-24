import React from 'react';
import WorkProperties from './WorkProperties';
import EditionProperties from './EditionProperties';
import EditionGroupProperties from './EditionGroupProperties';

const EntitySpecificProperties = ({type}) => {
  if (type === "Work") {
      return <WorkProperties />
  } else if (type === "Edition") {
      return <EditionProperties />
  } else if (type === "Edition Group") {
      return <EditionGroupProperties />
  } else {
      return null
  }
};

export default EntitySpecificProperties;