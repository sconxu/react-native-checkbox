import React from 'react';
import findById from './test/findById';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});
