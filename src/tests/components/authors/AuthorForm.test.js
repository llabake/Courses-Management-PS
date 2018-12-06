import React from 'react';
import { shallow } from 'enzyme';
import AuthorForm from "../../../components/authors/AuthorForm";

describe('<AuthorForm/>', () => {
  it('should render correctly', () => {
    const props = {
      author: {},
      onSave: jest.fn(),
      onChange: jest.fn(),
      saving: false,
      errors: [],
    };
    const wrapper = shallow(<AuthorForm {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').props().value).toBe('Save');
  });
  it('should should saving when saving', () => {
    const props = {
      author: {},
      onSave: jest.fn(),
      onChange: jest.fn(),
      saving: true,
      errors: [],
    };
    const wrapper = shallow(<AuthorForm {...props} />);
    expect(wrapper.find('input').props().value).toBe('Saving');
  });
});
