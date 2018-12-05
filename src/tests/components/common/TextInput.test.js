import React from 'react';
import { mount } from 'enzyme';
import TextInput from "../../../components/common/TextInput";

describe('<TextInput />', () => {
  it('field component renders correctly', () => {
    const props = {
      label: '',
      placeholder: '',
      name: '',
      error: [],
      value: '',
      onChange: jest.fn(),
    };
    const wrapper = mount(<TextInput {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
  it('Text input field component show error when they occur', () => {
    const props = {
      label: 'Title',
      placeholder: '',
      name: 'title',
      error: ['Course title must be at least 2 characters'],
      value: 'e',
      onChange: jest.fn(),
    };
    const wrapper = mount(<TextInput {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('.has-error').exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
