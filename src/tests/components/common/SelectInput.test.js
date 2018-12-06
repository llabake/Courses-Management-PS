import React from 'react';
import { mount } from 'enzyme';
import SelectInput from "../../../components/common/SelectInput";

describe('<SelectInput />', () => {
  it('field component renders correctly', () => {
    const props = {
      label: '',
      placeholder: '',
      name: '',
      error: [],
      value: '',
      options: [{ value: '', text: '' }],
      defaultOption: '',
      onChange: jest.fn(),
    };
    const wrapper = mount(<SelectInput {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
  it('Select input field component show error when they occur', () => {
    const props = {
      label: 'Author',
      placeholder: '',
      name: 'authorId',
      defaultOption: 'Select Author',
      error: ['Author name must contain at least 4 characters'],
      value: '',
      options: [{ value: '', text: '' }],
      onChange: jest.fn(),
    };
    const wrapper = mount(<SelectInput {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('.alert-danger').exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
