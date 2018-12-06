import React from 'react';
import { shallow } from 'enzyme';
import CourseForm from "../../../components/course/CourseForm";

describe('<CourseForm/>', () => {
  it('should render correctly', () => {
    const props = {
      course: {},
      onSave: jest.fn(),
      onChange: jest.fn(),
      saving: false,
      errors: [],
    };
    const wrapper = shallow(<CourseForm {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').props().value).toBe('Save');
  });
  it('should should saving when saving', () => {
    const props = {
      course: {},
      onSave: jest.fn(),
      onChange: jest.fn(),
      saving: true,
      errors: [],
    };
    const wrapper = shallow(<CourseForm {...props} />);
    expect(wrapper.find('input').props().value).toBe('Saving');
  });
});
