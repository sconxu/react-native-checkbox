import React from 'react';
import findById from '../test/findById';
import renderer from 'react-test-renderer';
import App from '../App';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('onChange of Checkbox true', () => {
  let checkBox = renderer.create(<App />).getInstance();
  checkBox.checkBoxState(true)
  expect(checkBox.state.checkbox).toEqual(false);
});

test('onChange of Checkbox false', () => {
  let checkBox = renderer.create(<App />).getInstance();
  checkBox.checkBoxState(false)
  expect(checkBox.state.checkbox).toEqual(true);
});