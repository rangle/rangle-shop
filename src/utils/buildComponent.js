import React from 'react';
import { pascalCase } from 'pascal-case';
import * as components from '../components';

const Fallback = (props) => <div {...props} />;

export const componentSelector = (
  componentsDictionary,
  defaultSelection = Fallback,
) => (componentType) =>
  componentsDictionary[pascalCase(componentType)] || defaultSelection;

function hasSubComponent(val) {
  return Array.isArray(val)
    ? !!val.find((content) => !!content.componentType)
    : !!val.componentType;
}

export const buildComponent = (spec) => {
  const Component = componentSelector(components)(spec.componentType);
  const props = { ...spec.props };

  if (Component !== Fallback) {
    props.entryId = spec.entryId;
  }

  Object.keys(props).forEach((field) => {
    const val = props[field];

    if (hasSubComponent(val)) {
      props[field] = Array.isArray(val)
        ? val.map((sub) =>
            hasSubComponent(sub) ? buildComponent(sub) : sub,
          )
        : buildComponent(val);
    }
  });

  return (
    <Component
      key={spec.entryId}
      componentType={spec.componentType}
      {...props}
    />
  );
};
